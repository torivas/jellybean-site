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
