# Prévia e QA — Jelly Bean Rock Editorial

Este procedimento usa somente a branch de desenvolvimento. Não publica e não altera a `main`.

## 1. Abrir a prévia local

```bash
git clone https://github.com/torivas/jellybean-site.git
cd jellybean-site
git checkout redesign-editorial-2026
python3 -m http.server 8000
```

Acesse `http://127.0.0.1:8000` no navegador. A página não depende de build.

## 2. Inspecionar fotos sem sobrescrever originais

Instale Pillow apenas se necessário: `python3 -m pip install Pillow`.

```bash
python3 tools/optimize-media.py
python3 tools/optimize-media.py --write
node tools/media-budget.cjs
node tools/site-smoke-test.cjs
```

A primeira execução lista a otimização prevista; `--write` cria cópias WebP em `img/optimized/`. **Não** substitui originais, **não** modifica o HTML e **não** publica. Nenhuma foto gerada deve entrar no site antes de comparação visual lado a lado e confirmação de fisionomia.

## 3. Validar em navegador

Opcionalmente instale Playwright e seu Chromium no seu ambiente (não requer serviço remoto):

```bash
npm install --no-save playwright
npx playwright install chromium
SITE_URL=http://127.0.0.1:8000 node tools/browser-qa.mjs
```

O script registra capturas em `qa-output/` nos tamanhos 360, 390, 768 e 1440 px, verificando overflow horizontal, Instagram no cabeçalho, carregamento do hero, abertura/fechamento do menu mobile e funcionamento do lightbox por teclado. Os testes automatizados não garantem a preservação visual das feições: compare manualmente cada imagem original com sua cópia. Inspecione manualmente legibilidade, menu, lightbox, todas as faces, rodapé e CTAs. Remova arquivos temporários não desejados antes de fazer commit.

## 4. Critérios antes de propor publicação

- Fotos dos quatro músicos reconhecíveis, sem alteração facial; originais preservados.
- Nenhuma data de show não confirmada, nenhuma imagem sintética de integrante.
- Links Instagram e contato testados em celular e desktop.
- Fotografias externas testadas; as indisponíveis devem ser substituídas por cópias autorizadas e estáveis.
- Sem erro de console, scroll horizontal ou imagens ausentes nas capturas.
- Avaliar Lighthouse/PageSpeed real depois de executar as otimizações. Não presumir ganhos sem medição.
- Aprovação explícita do responsável antes de merge para `main` e deploy.

## Limite atual

Os scripts foram adicionados ao GitHub e inspecionados, mas não foram executados contra a página em navegador nesta sessão. O acesso aos bytes binários dos JPEGs do GitHub falhou, então ainda não existem cópias WebP resultantes nem screenshots reais no repositório.
