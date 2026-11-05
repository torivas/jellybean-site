#!/usr/bin/env python3
"""Apply verified Jelly Bean WebPs from the ChatGPT package, without changing JPEG originals.
Run from a checkout of redesign-editorial-2026:
python3 tools/apply-webp-package.py /path/to/webp-integration-package.zip
"""
from pathlib import Path
from hashlib import sha256
from zipfile import ZipFile
import re, subprocess, sys

CHECKSUMS = {
 "hero/jellybean-banda-oficial": "5f83f15baa93c7f44a4108e7a19bc65f140bc43787f993f06bd52b5af2b99afd",
 "shows/colonus-vocal": "b30827899e22c29080abf8d4d5b24cf7e87e3e006c3042035e5e38424d564a92",
 "shows/coordenadas-palco": "7a42f7073b3e26c7ec7486f83b3f9575db0e9e96d9183c84f035b2c3b3d94b4f",
 "shows/colonus-banda": "888e7325eba056ae5bdc2e9ff0b9c98ff9d7191748b5801285913b5ba3a53cc2",
 "Membros/fernando-vasques": "c92b9a1dc1db7949d5cf54f0e6468fcccfd0db00bd78110d3d0c105d6f419467"
}

def main():
 if len(sys.argv) != 2:
  raise SystemExit("Usage: python3 tools/apply-webp-package.py PACKAGE.zip")
 root = Path(__file__).resolve().parents[1]
 branch = subprocess.check_output(["git","branch","--show-current"], cwd=root, text=True).strip()
 if branch != "redesign-editorial-2026":
  raise SystemExit("ABORT: Checkout redesign-editorial-2026 first.")
 htmlfile = root / "index.html"
 old = htmlfile.read_text(encoding="utf-8")
 backup = root / "index.html.before-webp.bak"
 if backup.exists(): raise SystemExit("ABORT: existing HTML backup; inspect before retrying.")
 staged = []
 with ZipFile(Path(sys.argv[1]).resolve()) as archive:
  for stem, expected in CHECKSUMS.items():
   jpg = f"img/{stem}.jpg"
   webp = f"img/optimized/{stem}.webp"
   member = f"optimized/{stem}.webp"
   if not (root / jpg).is_file(): raise SystemExit(f"Missing original {jpg}")
   data = archive.read(member)
   if sha256(data).hexdigest() != expected or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
    raise SystemExit(f"ABORT: invalid WebP checksum/format {member}")
   destination = root / webp
   if destination.exists() and destination.read_bytes() != data:
    raise SystemExit(f"ABORT: conflicting file {destination}")
   pattern = re.compile(r'<img\b[^>]*\bsrc="' + re.escape(jpg) + r'"[^>]*>', re.I)
   if not pattern.search(old): raise SystemExit(f"Missing image tag {jpg}")
   staged.append((destination, data, webp, pattern))
 updated = old
 for destination, data, webp, pattern in staged:
  updated = pattern.sub(lambda m: f'<picture><source srcset="{webp}" type="image/webp">{m.group(0)}</picture>', updated)
 if updated == old: raise SystemExit("ABORT: no HTML changes")
 backup.write_text(old, encoding="utf-8")
 for destination, data, webp, pattern in staged:
  destination.parent.mkdir(parents=True,exist_ok=True)
  if not destination.exists(): destination.write_bytes(data)
 htmlfile.write_text(updated,encoding="utf-8")
 print("Integrated 5 verified WebP assets; originals preserved. Inspect git diff and run smoke tests.")

if __name__ == "__main__":
 main()
