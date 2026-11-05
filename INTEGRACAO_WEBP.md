# Integração WebP — pacote preparado em 05/11/2026

**Status:** imagens geradas e verificadas fora do repositório; aguardam importação na branch `redesign-editorial-2026`. Não modificar `main` ou publicar antes da aprovação.

## Arquivos do pacote

O pacote entregue na conversa contém `install-webp.py`, as cinco fotos em `optimized/` e uma prévia HTML isolada:

- `optimized/hero/jellybean-banda-oficial.webp`
- `optimized/shows/colonus-vocal.webp`
- `optimized/shows/coordenadas-palco.webp`
- `optimized/shows/colonus-banda.webp`
- `optimized/Membros/fernando-vasques.webp`

Os originais foram comparados com seus Git blob SHA-1 no GitHub antes da conversão; o processamento realizou orientação EXIF, redimensionamento com Pillow e codificação WebP, sem IA nem retoque facial. Redução agregada medida anteriormente: 11.410.550 para 687.176 bytes (~94%) nas cinco fotos, excluídos overheads de rede. Esse resultado não comprova melhora percentual equivalente do LCP.

## Instalar em um checkout local da branch

1. Baixe e extraia o pacote fornecido no ChatGPT (não é link público).
2. Faça checkout da branch `redesign-editorial-2026` do repositório `torivas/jellybean-site`.
3. Instale Pillow se necessário: `python3 -m pip install Pillow`.
4. Execute de onde preferir:

```bash
python3 /caminho/do/pacote/install-webp.py /caminho/do/jellybean-site /caminho/do/pacote/optimized
```

O instalador valida a integridade decodificável dos WebPs, a presença dos originais e as referências existentes, cria cópias na pasta `img/optimized/`, mantém todos os JPEGs como fallback dentro de `<picture>` e salva um backup `index.html.before-webp.bak`.

O instalador foi testado com um checkout sintético contendo os cinco JPEGs originais; a integração gerou cinco elementos `picture`, preservou os originais e criou backup. Não foi executado em um clone completo real, pois o acesso direto ao GitHub a partir do contêiner não estava disponível.

Após instalar, inspecione `git diff`, execute `node tools/site-smoke-test.cjs` e teste as capturas em desktop e mobile. **Remova o backup de trabalho antes do commit**, se estiver conforme.

## Bloqueios que permanecem

- Upload binário direto dos cinco WebPs ao GitHub não realizado a partir do ChatGPT; conector de GitHub recebe texto/base64, não os arquivos do contêiner automaticamente.
- Navegação de teste do contêiner bloqueou acesso a `file://` e servidor `localhost` (ERR_BLOCKED_BY_ADMINISTRATOR); **sem certificação visual real**.
- Três retratos restantes e imagens externas ainda precisam de curadoria e otimização.
- Sem merge, deploy ou alteração de produção.


## Avanço — execução da prévia e instalador versionado

- Adicionado ao GitHub o instalador `tools/apply-webp-package.py` (commit `db260db`), que recebe diretamente o ZIP entregue ao usuário, verifica SHA-256 dos 5 WebP, exige a branch `redesign-editorial-2026`, preserva todos os JPEGs originais e cria tags `<picture>` com fallback JPEG.
- Criado `.gitignore` (commit `edc387b`) para evitar commit acidental de capturas, backups e dependências.
- O acesso ao GitHub para upload binário pelo contêiner segue bloqueado por DNS; o conector textual do GitHub não consome automaticamente arquivos locais. Assim **os WebP ainda não estão no repositório** e as referências de produção não foram trocadas.
- A prévia **isolada** `preview-otimizadas.html` foi renderizada via Playwright com os 5 WebP embutidos como data URLs, evitando a restrição de rede: verificações nas larguras 390, 768 e 1440 px deram 6/6 imagens carregadas, sem overflow horizontal e com o link do Instagram presente. Capturas PNG dessas três dimensões foram geradas e inspecionadas. **Esse teste não valida o site completo da branch.**
- Integração recomendada no clone real após baixar o ZIP entregue na conversa: `python3 tools/apply-webp-package.py /caminho/webp-integration-package.zip` e `node tools/site-smoke-test.cjs`. Em seguida executar QA visual real e `git diff` antes do commit; nunca publicar automaticamente.


## Validação adicional de identidade e integridade — 05/11/2026

- O pacote ZIP foi reaberto e os cinco arquivos WebP passaram na comparação SHA-256 com o manifesto original, além de teste de decodificação pelo Pillow; nenhum arquivo precisou ser regenerado.
- Commit `3762b66`: `tools/apply-webp-package.py` agora compara **também** o SHA-256 do JPEG existente no checkout com o original aprovado e recusa alterações locais pendentes em `index.html` antes de modificar o HTML. A checagem evita instalar uma foto diferente sob nome igual.
- Commit `91f5b70`: criado `WEBP_MEDIA_MANIFEST.json` com os cinco pares de caminhos, pesos e hashes originais e otimizados. Manifesto identifica explicitamente que os WebP **ainda não foram commitados ao GitHub**.
- As capturas anteriores eram de uma **prévia isolada**, não do site completo. Não mostrar imagens genéricas de pessoas como se fossem músicos da Jelly Bean.
- A transferência dos arquivos binários para a branch ainda é uma dependência real do checkout local; não atualizar links `picture/srcset` antes da presença de cada arquivo no repositório.
