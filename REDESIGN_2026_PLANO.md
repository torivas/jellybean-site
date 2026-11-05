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
