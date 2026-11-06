# Jelly Bean — Redesign editorial 2026

Status: desenvolvimento isolado. Base: `revisao-identidade-2026` (11 commits à frente da main). Não publicar sem aprovação.

## Objetivo
Site editorial, rápido e responsivo que apresente a banda por registros autênticos, divulgue shows confirmados e simplifique contatos de contratação. Referência de energia visual: Foo Fighters; sem copiar marca, composição, imagens ou recursos proprietários.

## Fontes normativas consultadas
1. Constituição Oficial da Marca Jelly Bean v1.0 (julho 2026)
2. Manual de Identidade Visual e Comunicação v1.0
3. Constituição de Marketing, Conteúdo e Crescimento v1.0
4. Constituição de Direção Musical e Experiência de Show v1.0
5. Sistema de Produção Visual (setembro 2026)
6. Catálogo de mídia Jelly Bean (Drive; curadoria dinâmica)
Também verificar Constituição de Formatos e Áreas Seguras quando imagens forem adaptadas ao Instagram.

## Identidade — invariantes
- Carvão #171717, grafite #343434, off-white #E9E3D8, areia #C9BDAA, âmbar #B66A2C. Cores auxiliares pontuais: #873B32, #4E5848, #2F4B50.
- Fontes Zilla Slab (títulos), Archivo Narrow (serviço), Source Sans 3 (interface).
- Usar logo oficial sem redesenhar. Evitar clichês musicais, falsa grandiosidade, nostalgia explícita, linguagem adolescente, imitação literal de Foo Fighters.
- Fotografias reais; preservar feições/identidade dos integrantes. Tratamento discreto, sem fabricar pessoas, público ou contexto.

## Informação e hierarquia
1. Hero: identificação da banda, fotografia real, CTA de agenda e contratação.
2. Agenda: somente datas confirmadas; estado vazio intencional se não houver dados.
3. O show: contexto humano e registros reais.
4. A banda: quatro integrantes e fotos oficiais.
5. Galeria editorial: grid assimétrico, legendas factuais, lightbox acessível.
6. Contratação: WhatsApp com mensagem objetiva e links para material institucional.
7. Rodapé: redes sociais, informações verificadas.

## UX e critérios
- Mobile-first, foco visível, menu por teclado com Escape, sem bloqueios de scroll.
- Animações sob demanda, respeitar prefers-reduced-motion; nenhum conteúdo deve ficar invisível quando JS falha.
- Sem autoplay com áudio, sem vídeos enormes acima da dobra.
- Imagens WebP/AVIF quando disponíveis, srcset, dimensões e lazy load para evitar CLS.
- Core Web Vitals em campo: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1 em p75.
- Analytics apenas com consentimento/adequação de privacidade se implementado.

## Acervo e curadoria
Catálogo (Drive): 565 registros na leitura de 05/11/2026; 61 candidatos iniciais A/B, LIBERADO e ORIGINAL na triagem por colunas. Não confundir nota de catálogo com inspeção visual.

Coordenadas Bar:
- Fotos: https://drive.google.com/drive/folders/1oyyXCq0KvG5lPhcV5fWrw12vXZ3L08MB — 81 arquivos, incluindo JPEG e HEIC.
- Vídeos: https://drive.google.com/drive/folders/1aNXkX5Q8YxXXGFNblwVULTS_o3HD0HBm — 34 itens, em maioria MOV; exigir revisão completa antes de editar ou publicar.
- Inspeção visual inicial: IMG_2556.JPG é retrato vertical de músico ao vivo sob iluminação azul, forte para seção humana; IMG_2460.JPG oferece contexto de dupla guitarra/bateria e é candidato a colagem; ainda não são aprovados para hero.
- Antes de selecionar: comparar arquivo, ID canônico, pasta, integridade facial, classe/status, disponibilidade, enquadramento, histórico de uso. HEIC converter apenas em cópia para web; preservar originais.
- Não publicar links diretos do Drive em produção como estratégia definitiva de hospedagem: usar assets otimizados e estáveis.

## Plano de entrega
Fase A: base isolada + inventário + design tokens + arquitetura.
Fase B: experiência interativa e versão responsiva funcional.
Fase C: curadoria visual final, compressão e substituição de imagens; seleção de vídeo apenas após revisão de cada clipe.
Fase D: QA mobile/desktop, teclado, performance, SEO, links, texto e checagem de identidade.
Fase E: apresentar preview e solicitar aprovação explícita antes de merge/publicação.

## Riscos e lacunas
- Agenda não foi fornecida; não criar shows fictícios.
- A versão de referência Foo Fighters serve como benchmark, não licença de reprodução.
- Arquivos de mídia originais podem ter restrições e formatos inadequados para web. Não alterar Drive.
- Sem comprovação de licenças de gravações para trilha, não adicionar áudio automático.


## Implementação: Rock Editorial Experience — 05/11/2026
- Conceito expressivo aprovado pelo responsável: cartaz editorial, sobreposição de texturas e recortes, headline de alto impacto, uso controlado de âmbar.
- Arquivos alterados apenas na branch `redesign-editorial-2026`: `index.html` e novo `editorial-2026.css` (a base `style.css` permanece intacta).
- Foto do hero: original `JELLY BEAN 04.jpg`, Drive ID `1ZEAXjhcntR47dM_HDRZLmfRmC22KK62C`; mostra os quatro integrantes reais. Não usar imagens sintéticas de pessoas.
- Galeria: selecionar originais de Colonus e Coordenadas Bar por IDs canônicos do catálogo e pastas oficiais; verificar direitos de uso e disponibilidade das URLs.
- Regra identity lock expressa: nunca regenerar, misturar, retocar traços faciais, mudar cabelo, barba, expressão ou idade aparente. Aplicar apenas recorte, enquadramento sem excluir integrantes, ajustes globais de luz/cor e elementos não faciais. Se a identidade não puder ser verificada, rejeitar a peça.
- A criação de imagem por IA fica limitada a fundos, materiais, textura, grafismo e cenários sem pessoas identificáveis; integrar fotos originais como camadas fotográficas não regeneradas.
- Cuidado de conteúdo: não afirmar repertório autoral, agenda, número de espectadores ou prestígio sem confirmação. Dados reais prevalecem.
- Atualização visual inclui torn paper edge em CSS, duas manchas gráficas, cabeçalho do pôster, CTA agenda + contratação, collage, responsividade e redução de movimento. Sem dependências JS ou bibliotecas adicionais para esses efeitos.
- QA de leitura realizado: quatro arquivos carregados pelo conector, stylesheet referenciado, JS sintaticamente válido, URLs de fotos canônicas e presença de semântica de galeria/teclado. QA de navegador, acessibilidade dinâmica e desempenho ainda não realizados.
- Pendências: publicar ativos otimizados em hospedagem estável, testar links de imagem em rede pública, revisar os 34 vídeos de Coordenadas, verificar o hero em dimensões reais e mobile, executar Lighthouse e testar navegação por teclado. Não fundir nem publicar antes de aprovação.


## Rodada de robustez UX — 05/11/2026
- Branch de desenvolvimento atualizada com preconnect de imagem, prioridade para fotografia principal, metadados, script diferido.
- Falhas de carregamento da galeria recebem mensagem de recuperação; não sugerir que URL Drive pública esteja validada.
- Correções: menu mobile fecha ao tocar fora, tecla Escape devolve foco ao botão, resize fecha menu; suporte a redução de movimento.
- Progressive enhancement: sem JS, textos e seções não ficam invisíveis por causa da animação de entrada.
- Verificação com GitHub readback: index, CSS base, CSS editorial e script íntegros; sintaxe JS validada.
- Limite conhecido: preview do raw.githack e links Googleusercontent não puderam ser testados via navegador automatizado nesta rodada; não afirmar certificação de performance/responsividade ou publicação.
- Decisões seguintes: espelhar fotografias autorizadas em assets estáveis e otimizados, validar o hero em celular real, auditar contraste e testes Lighthouse; revisar vídeo antes de qualquer autoplay silencioso.


## Instagram e estabilidade de imagens — 05/11/2026
- Instagram oficial `https://www.instagram.com/bandajellybean/`: ícone SVG em estilo selo editorial, visível no cabeçalho fixo (desktop/mobile) e no hero, ambos acessíveis com texto `aria-label` e foco de teclado.
- Concluída primeira migração de 4 fotografias para assets versionados no GitHub, sem alteração de pixels/rostos: `img/hero/jellybean-banda-oficial.jpg` (409516 bytes, original `JELLY BEAN_REDE SOCIAL-15.jpg`, Drive ID `1t1oTTLKdDp0lmRsn47C2hGxKL5hqFBLL`); `img/shows/colonus-vocal.jpg` (1431096 bytes, Drive `1xh71EJ8QqTR7aRHb-m3kmxd4l9dawNbB`); `img/shows/coordenadas-palco.jpg` (1610851 bytes, Drive `1Z5nijbaZA_H76NieDwYuwcJj0Z-44Irg`); `img/shows/colonus-banda.jpg` (1068799 bytes, Drive `1fO_WiElXl4_a6xiWpL8db_MGV0WIQqPm`).
- Primeira imagem do hero passou a utilizar `img/hero/jellybean-banda-oficial.jpg`. A galeria usa as três fotos versionadas nas respectivas posições. Há outras imagens do Drive ainda embutidas no HTML; migração incompleta.
- Validação de integridade: imagens confirmadas pela API Git Trees com tamanho e SHA. A API genérica de leitura GitHub não retorna conteúdo binário, portanto erros de UTF-8 não equivalem a ausência dos arquivos.
- Pendências críticas: converter imagens de show para formatos responsivos otimizados e medir o LCP/CLS/INP em navegador; confirmar recortes no mobile sem perder músicos; verificar URLs de fotos ainda externas; auditar os 34 vídeos de Coordenadas antes de selecioná-los; criar preview independente com teste de ponta a ponta.
- Produção intacta. Não há autorização para merge da `main` ou publicação automática.


## Rodada: Instagram em evidência — 05/11/2026
- Implementado em `editorial-2026.css` (commit `b19c5e9`): cartão do Instagram no hero ampliado, gradiente colorido inspirado na identidade pública do Instagram, ícone maior, contraste reforçado, selo editorial, foco por teclado e ajustes específicos em mobile.
- Cabeçalho: atalho do Instagram agora recebe fundo em gradiente, maior destaque e estados hover/focus.
- Mantidas todas as fotografias reais e a regra de preservação integral das fisionomias; não houve mudanças em imagens, agenda, conteúdo ou produção.
- Próximos testes: verificar visual real em navegador desktop/mobile, legibilidade e sobreposição com a fotografia do hero, contraste e eventual ajuste antes da publicação.
- Produção continua intacta: alteração exclusiva à branch `redesign-editorial-2026`.


## Rodada seguinte: contraste, responsividade e semântica — 05/11/2026
- Commit `59e7906`: corrigidas cores herdadas em seções escuras (galeria e narrativa de show) e nas seções claras (texto da banda), com contraste mais coerente.
- Ajustado o enquadramento responsivo do hero para `object-fit:contain` sem regenerar/cortar os quatro músicos; nas miniaturas de galeria mobile, `contain` preserva o quadro da fotografia.
- Estabelecidos offsets de rolagem para âncoras sob cabeçalho fixo, estados de foco na galeria e refinamentos de layout em telas estreitas.
- Commit `588aeab`: landmarks e títulos identificáveis por acessibilidade, descrições de imagens corrigidas e `decoding=async` em imagens lazy.
- Revisão estática concluída. Pendente: screenshot/browser QA em múltiplos viewports, validação das imagens externas, conversão/otimização de mídias e Core Web Vitals reais.
- Nenhuma imagem original foi alterada; nenhuma mudança ocorreu na `main` ou no site publicado. Sem merge/publicação sem aprovação expressa.


## Continuidade: integridade HTML e resiliência da galeria — 05/11/2026
- Commit `86f0923`: corrigidos 12 atributos malformados de `<img>` introduzidos na edição anterior; leitura de volta confirmou ausência do padrão inválido.
- Commit `a334688`: galeria reage a imagens que falham, marca miniaturas indisponíveis, remove sua ativação por teclado e mantém a navegação entre imagens carregáveis. Dialog mostra texto de falha se todas não carregarem.
- Commit `189704a`: estilo de fallback editorial legível para miniaturas indisponíveis, sem gerar pessoas ou modificar fotografias.
- Auditoria estática de HTML: 16 ocorrências de `<img>`; 9 caminhos `img/` e 6 referências diretas ao Googleusercontent. Esta contagem não equivale a validação de rede ou qualidade do acervo.
- Readback do GitHub confirmou os três arquivos alterados e a presença do fallback no JavaScript e CSS.
- Pendente: navegador real (incluindo testes de erro de rede), validação do layout e Lighthouse; otimizar as imagens locais pesadas, substituir fontes externas instáveis por assets autorizados versionados, revisar 34 vídeos individualmente antes de seleção.
- Produção e branch `main` não alteradas. Identidade/fisionomia das pessoas intactas.


## Continuidade: redução de dependência externa e smoke tests — 05/11/2026
- `13b88fe`: imagem de destaque da seção sobre o show trocada de URL Googleusercontent por foto real já versionada, `img/shows/colonus-banda.jpg`. Sem alterações de pixels ou feições.
- `13b88fe`: miniaturas da galeria recebem `fetchpriority="low"`, sem remover `loading="lazy"`; priorização final deve ser medida em navegador.
- `458c3e3`: criado `tools/site-smoke-test.cjs`, teste estático local sem bibliotecas, acesso remoto ou GitHub Actions pagos; execução: `node tools/site-smoke-test.cjs` em clone da branch.
- `3cc6f12`: imagem no lightbox recebeu decodificação assíncrona para manter consistência.
- Leitura remota confirmou HTML sem atributo `/ decoding` malformado, todas as 16 tags `img` com `alt` e `decoding=async`, e todos os caminhos locais presentes na árvore da branch. Restam 5 referências externas a Googleusercontent.
- O smoke test foi checado por inspeção de código e validações equivalentes no conector; **a execução do script pelo Node em clone local não foi realizada**.
- A otimização real dos arquivos JPEG (incluindo um retrato com aproximadamente 6,9 MB), revisão dos 34 vídeos, teste visual com Chrome e aferição Lighthouse continuam pendentes. Não afirmar ganhos numéricos de desempenho.
- Sem merge ou publicação; produção `main` preservada, fotos originais e fisionomias intactas.


## Rodada: inventário de imagens e orçamento de performance — 05/11/2026
- Inspeção da árvore GitHub da branch revelou 8 JPEGs locais, total 14.399.018 bytes (aprox. 13,73 MiB). Isso é peso total do acervo, **não** bytes transferidos por visita.
- Foto oficial do hero: 409.516 bytes, sob o limite inicial de 500 KiB. O maior arquivo é `img/Membros/fernando-vasques.jpg`: 6.890.288 bytes (~6,57 MiB). Outros 6 JPEGs também ultrapassam os budgets estabelecidos.
- Criado `tools/media-budget.cjs` (commit `2614484`) para inventariar os tamanhos das fotos locais, alertar sobre orçamento e bloquear por código de saída arquivos obrigatórios ausentes.
- Rodar localmente no clone: `node tools/site-smoke-test.cjs && node tools/media-budget.cjs`. Os scripts não dependem de serviço pago, não modificam originais e não publicam nada. Não foram executados em clone Node nesta sessão; a inspeção dos caminhos foi feita via árvore do GitHub.
- Limitação técnica: leitura da imagem binária pelo conector retornou erro de decodificação UTF-8, e o contêiner não conseguiu resolver o host GitHub para baixá-la. Assim **nenhuma compressão de imagem foi realizada** e nenhuma fotografia foi substituída.
- Próxima intervenção com acesso binário: gerar cópias JPEG/WebP com tamanhos adequados, conferir visualmente as feições e apenas então atualizar referências para `picture/srcset` com fallback original. Sem regenerar rostos, sem alterar a `main`.


## Rodada seguinte: pipeline seguro para otimização e prévia — 05/11/2026
- Tentativa de download binário por HTTP no contêiner falhou (DNS para `raw.githubusercontent.com`), assim não houve recompressão efetiva nem upload de WebP.
- Adicionado `tools/optimize-media.py` (commit `5b31080`): geração **opt-in** de cópias WebP em `img/optimized/` com Pillow, mantendo JPEGs originais e sem qualquer uso de IA facial. Por padrão opera apenas em inventário; `--write` é explícito.
- Adicionado `tools/browser-qa.mjs` (commits `1d3fc95`, `ac8301d`, `b007bcf`): harness Playwright opcional para capturas 360, 390, 768, 1440 px e verificações de overflow, Instagram e carregamento do hero em preview local.
- Adicionado `QA_PREVIEW.md` (commit `ffa1d1a`) com instruções para prévia HTTP local, testes, inspeção manual de fisionomia e portão de aprovação.
- Confirmado readback dos três novos arquivos na branch; **nenhum dos scripts foi executado em um clone local nesta sessão**. A conversão real e a revisão por screenshot seguem pendentes de acesso aos arquivos binários/browser.
- A branch `main`, o site de produção e as fotos originais permanecem intactos.


## Continuidade: inspeção de automação de QA — 05/11/2026
- Verificado no ambiente de execução: Chromium e Python Pillow disponíveis; porém o diretório com assets binários do projeto está vazio e tentativa HTTP de baixar o GitHub falhou por DNS. Não houve compressão, capturas ou teste end-to-end real.
- O teste `tools/browser-qa.mjs` foi ampliado (commit `718589e`) para avaliar abertura e fechamento do menu mobile, navegação por Escape e abertura/fechamento do lightbox por teclado, além de overflow e Instagram.
- Documento `QA_PREVIEW.md` atualizado (commit `2d2e5e8`) com os novos critérios e reforço de inspeção humana de identidade.
- Os dois arquivos foram gravados na branch de desenvolvimento; a execução deles depende de um checkout local com as imagens e do ambiente Playwright configurado.
- Próxima prioridade real: obter acesso aos JPEGs originais por via binária autorizada, executar otimização em cópias, validar faces e rodar as capturas. Não declarar que o site passou no QA antes de executar os testes.
- `main` e publicação intactas.


## Execução efetiva com originais do Drive — 05/11/2026
- O conector Google Drive permitiu obter 5 fotografias originais no contêiner. Para cada foto foi calculado SHA-1 no formato Git blob e confirmado que coincide exatamente com o SHA do JPEG já presente no GitHub. Arquivos confirmados: `img/hero/jellybean-banda-oficial.jpg`, `img/shows/colonus-vocal.jpg`, `img/shows/coordenadas-palco.jpg`, `img/shows/colonus-banda.jpg`, `img/Membros/fernando-vasques.jpg`.
- Cópias WebP geradas com Pillow, `EXIF transpose`, `thumbnail` com LANCZOS no limite 1920 px e qualidade 85. Não houve regeneração nem retoque de rostos; fotos originais preservadas.
- Redução de tamanho conjunta nessas cinco imagens: 11.410.550 bytes para 687.176 bytes (aproximadamente 93,98%). A redução refere-se aos arquivos produzidos; não houve medição de desempenho real do website.
- Integridade WebP verificada ao abrir as cinco imagens; montagem de contato inspecionada para verificar enquadramento. O pacote ZIP foi produzido no ambiente de trabalho, mas **as cópias WebP ainda não foram enviadas ao repositório**. Não criar referências `srcset` a caminhos inexistentes.
- Atualizado `index.html` (commit `7b5c329`) com dimensões originais verificadas em sete ocorrências de fotos locais, reduzindo o risco de deslocamento de layout durante o carregamento.
- Restam três imagens de integrantes não otimizadas nesta rodada, e cinco referências externas no HTML. No Drive, os arquivos homônimos de Walter, Paulinho e Henrique têm tamanhos diferentes dos JPEGs versionados; antes de tratar como mesma versão, comprovar hash/correspondência.
- Pendências: importar WebPs verificados na branch, verificar referência/fallback visual e executar QA em browser com o repositório completo. Sem merge ou deploy.


## Curadoria de segurança — 06/11/2026
- Confirmação local dos arquivos do pacote `webp-integration-package.zip`: os cinco WebP correspondem aos SHA-256 registrados no manifesto; também confirmei SHA-256 dos cinco JPEGs originais do Drive. Isso não significa que a branch tenha recebido os WebP.
- Tentativa de acesso HTTPS ao GitHub no contêiner falhou por DNS. O conector GitHub aceita criação de blobs base64, mas não recebe diretamente o caminho dos arquivos do contêiner; portanto **upload binário e substituição de `srcset` não foram realizados**.
- Commit `0ebb158`: removidas da galeria 3 referências externas ao Googleusercontent sem verificação visual de identidade nesta rodada. A galeria agora contém apenas quatro imagens oficiais locais já verificadas: `colonus-vocal.jpg`, `coordenadas-palco.jpg`, `colonus-banda.jpg` e `jellybean-banda-oficial.jpg`.
- Commit `6463192`: adicionadas ao smoke test verificações de quantidade (4) e de pertencimento à lista oficial de fontes de imagem da galeria.
- A imagem genérica mostrada em uma resposta anterior jamais foi integrada ao repositório e não deve ser novamente exibida como integrante da banda.
- Para publicar, ainda é necessário importar os WebP ao checkout da branch e rodar o teste de browser sobre o site completo; nenhuma alteração na `main`.
