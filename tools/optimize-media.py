#!/usr/bin/env python3
"""Prepare smaller copies of ORIGINAL Jelly Bean photographs.

Default: inventory only. Add --write to generate copies in img/optimized/.
Never overwrites originals and never performs AI restoration or facial edits.

Requirements: Python 3 and Pillow (python3 -m pip install Pillow).
Examples:
  python3 tools/optimize-media.py
  python3 tools/optimize-media.py --write
"""
import argparse
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
FILES = [
    "img/hero/jellybean-banda-oficial.jpg",
    "img/Membros/walter-delanno.jpg",
    "img/Membros/paulinho-carvalho.jpg",
    "img/Membros/fernando-vasques.jpg",
    "img/Membros/henrique-duarte.jpg",
    "img/shows/colonus-banda.jpg",
    "img/shows/colonus-vocal.jpg",
    "img/shows/coordenadas-palco.jpg",
]


def prepare(relative: str, write: bool) -> None:
    source = ROOT / relative
    if not source.is_file():
        raise FileNotFoundError(f"Missing original: {relative}")
    with Image.open(source) as original:
        if original.format != "JPEG":
            raise ValueError(f"Expected JPEG original: {relative}")
        # EXIF orientation is applied only to the *copy*.
        corrected = ImageOps.exif_transpose(original)
        corrected.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
        corrected = corrected.convert("RGB")
        target = ROOT / "img" / "optimized" / Path(relative).relative_to("img")
        previous_size = source.stat().st_size
        if not write:
            print(f"PLAN  {relative}  {original.size} -> {corrected.size}; original {previous_size:,} bytes")
            return
        target.parent.mkdir(parents=True, exist_ok=True)
        webp = target.with_suffix(".webp")
        corrected.save(webp, format="WEBP", quality=85, method=6)
        size = webp.stat().st_size
        print(f"COPY  {relative} -> {webp.relative_to(ROOT)}  {previous_size:,} -> {size:,} bytes")
        if size >= previous_size:
            webp.unlink()
            print("SKIP  Result not smaller; original preserved.")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="Write optimized WebP COPIES; never touch originals")
    args = parser.parse_args()
    for relative in FILES:
        prepare(relative, args.write)
    if args.write:
        print("NEXT: visually inspect all outputs and verify identities BEFORE referencing them in HTML.")


if __name__ == "__main__":
    main()
