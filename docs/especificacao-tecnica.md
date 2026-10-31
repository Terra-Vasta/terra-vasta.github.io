# Especificação técnica do site SRD A Terra Vasta

**Versão 2.0 · 31 de outubro de 2026 · Português (Brasil)**

Este documento define a arquitetura, os modelos de conteúdo, a identidade editorial e os critérios de publicação do site principal A Terra Vasta. O projeto já tem um esqueleto Astro + Starlight publicado; esta especificação orienta sua evolução. A Terra Vasta é, no momento, o nome tanto do sistema quanto do cenário. As decisões ainda em aberto estão identificadas na seção [Decisões pendentes](#12-decisões-pendentes).

## Decisões centrais

| Decisão | Diretriz |
|---|---|
| Tecnologia | Astro + Starlight, com componentes próprios quando necessário. |
| Conteúdo | Markdown com frontmatter; cada entidade de jogo tem seu próprio arquivo. |
| Navegação | Seções independentes para Sistema e Cenário. |
| Repositório | [`Terra-Vasta/terra-vasta.github.io`](https://github.com/Terra-Vasta/terra-vasta.github.io), site principal da organização. |
| Endereço | [`https://terra-vasta.github.io/`](https://terra-vasta.github.io/), na raiz, sem domínio próprio por enquanto. |
| Publicação | GitHub Pages por GitHub Actions. |
| Licenças | Regras do sistema A Terra Vasta: CC BY-SA 4.0; código do site: MIT; marcas, logos e identidade visual excluídos. A licença do conteúdo do cenário está pendente. |
| Idiomas | Português do Brasil (`pt-BR`) e inglês dos Estados Unidos (`en-US`). |
| Experiência | Tema claro/escuro, layout responsivo, busca, impressão e acessibilidade. |
| Identidade | Fantasia sombria, decadência cósmica, sobrevivência e exploração; ilustrações de ambientação, sem mascote ou personagem central. |

## 1. Escopo e princípios

O SRD é uma publicação estática de referência para regras e cenário de um RPG. O conteúdo será mantido em arquivos versionados e editado em Markdown pelo VS Code.

- **Fonte única:** cada perícia, talento ou magia tem um arquivo individual com seu conteúdo completo.
- **Derivação:** páginas de referência, tabelas, listagens, dados dos Compêndios e busca são gerados a partir dos mesmos arquivos.
- **Publicação:** `published: false` exclui o conteúdo de tabelas, listagens, índices, catálogos e busca pública. A página individual ainda pode existir e ser acessada por URL; esse campo não é mecanismo de sigilo.
- **Base de regras:** usar o SRD 5.2.1 de D&D como base, com a licença e a atribuição aplicáveis. Não adicionar conteúdo fora do SRD sem autorização.
- **Portabilidade:** manter Markdown e YAML legíveis e simples de editar.

## 2. Arquitetura e navegação

### 2.1 Camadas

| Camada | Responsabilidade |
|---|---|
| Astro | Compilação estática, rotas, coleções de conteúdo e integração de componentes. |
| Starlight | Layout documental, navegação, busca integrada, temas claro/escuro e base acessível. |
| Componentes próprios | Tabelas derivadas, Compêndios, painel de detalhes e estilos de impressão. |
| GitHub Actions | Instalar dependências, validar, compilar e publicar o site. |
| GitHub Pages | Hospedar os arquivos estáticos produzidos pelo build. |

### 2.2 Mapa do site

- **Início (landing page):** apresentação de A Terra Vasta, do Sistema e do Cenário, bloco narrativo sobre exploração e esperança e atalhos para Sistema, Cenário, Compêndios e Sobre o Projeto. A identidade visual da página inicial pode ser mais marcante que a das páginas de referência.
- **Sistema:** introdução, regras e referências gerais.
- **Sistema → Perícias:** tabela resumida, listagem completa alfabética e páginas individuais.
- **Sistema → Talentos:** tabela resumida, listagem completa alfabética e páginas individuais.
- **Sistema → Magias:** tabelas resumidas agrupadas por nível, com links para páginas individuais.
- **Compêndios:** catálogos interativos de Perícias, Talentos e Magias, com filtros e painel de detalhes.
- **Cenário:** seção independente para conteúdo próprio e expansão futura.
- **Créditos e licenças:** atribuição do material SRD e avisos de licença.

### 2.3 Landing page e identidade visual

#### Direção de identidade confirmada

- Nome editorial do projeto: **A Terra Vasta**. No momento, também é o nome do sistema e do cenário.
- Posicionamento: fantasia sombria, decadência cósmica, sobrevivência e exploração. A atmosfera deve sugerir um mundo que já morreu, deuses decadentes, ruínas de civilizações antigas, magia perigosa e esperança frágil.
- Frase de destaque: **“O mundo já acabou. O que você fará com o que sobrou?”**
- Não depender de mascote, personagem central ou logotipo figurativo. O elemento visual principal será uma ilustração de ambientação.
- Direção artística: dark fantasy monumental e atmosférica; preto, cinza-carvão, azul dessaturado e dourado envelhecido; títulos com serifada expressiva e corpo com tipografia simples e legível; ruínas colossais, névoa, silhuetas, iluminação dramática e detalhes gráficos discretos.
- A landing page pode usar imagem ampla e composição editorial mais dramática. As páginas internas permanecem minimalistas, com prioridade para leitura, consulta, navegação e impressão.
- Implementação inicial: cabeçalho compartilhado com navegação, busca, seletor de tema e idioma; landing pages em `src/content/docs/index.mdx` e `src/content/docs/en-us/index.mdx`; estilos globais em `src/styles/custom.css`; componente do cabeçalho em `src/components/TerraHeader.astro`.
- Redes e apoio: links para Ko-fi, Bluesky e X no rodapé global; chamada de apoio também na página Sobre o Projeto (créditos e licenças). O rodapé também mantém o link do repositório GitHub.
- A arte escolhida para a landing page é **Opção A — Cidade sob névoa**, salva em `public/images/taavira-hero-cidade-nevoa.webp`. Ela usa ruínas urbanas escuras, névoa clara e luz difusa, sem pontilhado, hachura ou ruído texturizado. A imagem imediatamente anterior está preservada em `docs/referencias/imagens/taavira-hero-dark-fantasy-v1.webp`; iterações pictóricas anteriores também permanecem em `docs/referencias/imagens/`. A aprovação editorial final e os termos de uso para publicação continuam pendentes.

#### Tokens visuais iniciais

Os valores abaixo são a primeira tradução da direção visual para a interface e podem ser refinados após revisão visual:

| Uso | Modo escuro | Modo claro |
|---|---|---|
| Fundo principal | `#101216` | `#F2EFE8` |
| Fundo dos atalhos | `#0D0F12` | `#E7E2D8` |
| Texto principal | `#E6E1D8` | `#262520` |
| Dourado de destaque | `#C9A76F` | `#72552E` |
| Tipografia de títulos | Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia | Mesma pilha serifada |
| Tipografia de leitura | pilha nativa `system-ui` | pilha nativa `system-ui` |

#### Estrutura editorial confirmada

1. **Apresentação de A Terra Vasta:** nome, frase de destaque, ilustração de ambientação e citação de Serkan Vhal.
2. **Sistema:** apresentação da proposta de jogo, enfatizando sobrevivência, escassez, combate tático e magia de alto risco.
3. **Cenário:** introdução breve a Taavira, seus deuses, impérios decadentes e regiões hostis.
4. **Exploração e esperança:** bloco narrativo sobre a busca em um mundo hostil, usando A Oitava como elemento de apresentação.
5. **Atalhos:** chamadas claras para Sistema, Cenário, Compêndios e Sobre o Projeto.

A página deve despertar curiosidade e encaminhar o leitor para as seções próprias, sem tentar explicar toda a lore de uma vez. Textos curtos devem ser extraídos do resumo de cenário fornecido e permanecer consistentes com ele; não criar fatos de cenário ou regras novas para preencher espaço.

#### Referência visual fornecida

A imagem [landing-page-referencia-visual.png](referencias/landing-page-referencia-visual.png) é uma sugestão de direção e composição, não um layout fechado nem uma arte aprovada para publicação. Ela reforça as decisões visuais acima e sugere:

- cabeçalho escuro com nome do projeto, navegação principal, busca e controle de tema;
- destaque inicial amplo, com ilustração panorâmica, título e texto sobrepostos em área de alto contraste, citação atribuída a Serkan Vhal e uma chamada principal;
- faixa inferior com quatro atalhos visuais para Sistema, Cenário, Compêndios e Sobre o Projeto;
- ornamentos e ícones discretos em dourado envelhecido, separadores finos e fundos escuros texturizados.

Ao implementar, adaptar a composição para telas pequenas, manter todos os textos e controles legíveis e acessíveis, e respeitar a hierarquia editorial da seção 2.3. O destaque e os atalhos não substituem os blocos de apresentação do Sistema, do Cenário e de A Oitava; esses conteúdos podem vir abaixo da primeira dobra. A imagem mostra figuras pequenas como referência de escala ambiental, mas a identidade do projeto continua sem depender de personagem central ou mascote. Textos embutidos na imagem são apenas parte do mockup: usar conteúdo HTML real, revisável, traduzível e acessível.

#### Conteúdo editorial proposto

O texto abaixo é uma proposta de conteúdo para orientar a composição e pode ser revisado antes da implementação. As afirmações de cenário são limitadas ao resumo já fornecido.

**Abertura**

> O mundo não precisa ser salvo. Ele já morreu milênios atrás. Nós somos apenas os vermes rastejando sobre a carcaça para ver quem herda as cinzas.
>
> — Arquimago Serkan Vhal

**O mundo já acabou. O que você fará com o que sobrou?** Taavira foi erguida sobre o cadáver da Toda-Mãe. Entre impérios decadentes, deuses caídos, ruínas antigas e uma magia que fere o mundo, sobreviver já é uma conquista. Ainda assim, há quem se aventure para além dos muros em busca do que restou — e do que talvez ainda possa ser protegido.

**Sistema — Sobreviver é uma questão de escolhas.** A Terra Vasta propõe aventuras de sobrevivência e exploração, com escassez, combate tático e magia de alto risco. Consulte as regras e prepare-se para decidir o que vale o custo de continuar.

**Cenário — Taavira, sobre as cinzas.** Conheça um mundo marcado por deuses decadentes, impérios em ruínas e regiões hostis. A página inicial apresenta apenas um vislumbre; a história e os detalhes ficam na seção Cenário.

**Exploração e esperança — A Oitava.** A guilda de mercenários A Oitava desce a abismos e ruínas em busca de conhecimentos e artefatos que possam fechar as feridas de Taavira. Em um mundo que quase abandonou a esperança, seus integrantes ainda carregam esse fardo.

**Atalhos:** “Conheça o Sistema”, “Descubra o Cenário”, “Consulte os Compêndios” e “Sobre o projeto”. Cada chamada deve levar à página de destino correspondente.

O texto de abertura de Serkan Vhal deve preservar sua atribuição e contexto. A versão completa da frase inclui “momentos antes de arrancar os próprios olhos”; decidir editorialmente se essa nota será exibida junto da citação na página inicial, sem alterar a citação em si.

## 3. Estrutura de diretórios

Estrutura-alvo; considerar os caminhos já existentes no repositório antes de mover arquivos:

```text
.
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── docs/
│   └── especificacao-tecnica.md
├── src/
│   ├── content.config.ts
│   ├── content/
│   │   ├── pericias/
│   │   ├── talentos/
│   │   └── magias/
│   ├── content/docs/
│   │   ├── ... páginas em pt-BR
│   │   └── en-us/
│   │       └── ... páginas equivalentes em en-US
│   └── styles/custom.css
└── .github/workflows/deploy.yml
```

As páginas editoriais usam a coleção Starlight `docs`; entidades de jogo ficam em coleções separadas por tipo, conforme `src/content.config.ts`. Arquivos de Cenário devem ficar separados dos arquivos de Sistema.

## 4. Modelo de conteúdo e frontmatter

Cada entidade é um arquivo Markdown individual com frontmatter YAML estruturado e uma descrição completa no corpo. O esquema deve ser validado por Astro Content Collections e Zod. Não inferir mecânicas, valores ou categorias que não tenham sido definidos.

### 4.1 Campos comuns

| Campo | Tipo | Regra |
|---|---|---|
| `title` | string | Obrigatório; nome exibido. |
| `translationKey` | string | Identificador comum entre traduções da mesma entidade. |
| `locale` | string | `pt-BR` ou `en-US`. |
| `published` | boolean | Default central `true`; pode ser sobrescrito por entidade. `false` exclui das saídas públicas indexadas. |
| `description` | string | Resumo curto e factual para listas, cards e SEO, quando aplicável. |
| slug / nome do arquivo | string | Identificador de URL estável, minúsculo, ASCII e com hífens. |
| `lastUpdated` | date | Override editorial opcional; oculto por padrão. |
| `author` | string | Override editorial opcional; oculto por padrão. |

Não exibir data, autor ou versão na interface por padrão. Se esses metadados forem ativados, permitir overrides editoriais por campo. Dados derivados do Git só podem ser exibidos quando houver autoria confiável; não inventar autor para commits sem atribuição confiável.

### 4.2 Campos por tipo e tabelas de referência

| Tipo | Colunas confirmadas | Campos estruturados atuais |
|---|---|---|
| Perícia | Nome, Habilidade, Exemplo de uso | `habilidade`, `exemploDeUso` |
| Talento | Nome, Categoria, Pré-requisito | `categoria`, `preRequisito` (opcional) |
| Magia | Nome, Nível, Caminho/Escola, Alcance, Custo/Ação | `nivel` (inteiro a partir de 0), `caminhoOuEscola`, `alcance`, `custoOuAcao` |

A base de campos é o SRD 5.2.1. Os rótulos de tabela acima foram definidos pelo autor. O volume esperado é semelhante ao conteúdo básico de D&D 5e. Toda magia tem nível definido.

Os filtros específicos ainda não foram fechados. Começar pelos campos estruturados disponíveis e não criar semântica ou campos novos por conta própria. Pesquisa textual e filtros devem funcionar em combinação. Manter indicação de resultados, estado vazio e ação para limpar filtros.

### 4.3 Exemplos estruturais

Exemplo de perícia:

```yaml
---
title: Nome da perícia
translationKey: exemplo-pericia
locale: pt-BR
published: true
habilidade: ""
exemploDeUso: ""
---

Descrição completa em Markdown.
```

Exemplo de talento:

```yaml
---
title: Nome do talento
translationKey: exemplo-talento
locale: pt-BR
published: true
categoria: ""
preRequisito: ""
---

Descrição completa em Markdown.
```

Exemplo de magia:

```yaml
---
title: Nome da magia
translationKey: exemplo-magia
locale: pt-BR
published: false
nivel: 1
caminhoOuEscola: ""
alcance: ""
custoOuAcao: ""
---

Descrição completa em Markdown.
```

Os nomes e valores acima são ilustrativos e não constituem conteúdo canônico. Slugs diferentes devem manter registros distintos mesmo se títulos forem iguais; não deduplicar entradas automaticamente.

## 5. Referências e Compêndios

### 5.1 Páginas de referência

- **Perícias:** tabela resumida com Nome, Habilidade e Exemplo de uso; depois, listagem completa em ordem alfabética.
- **Talentos:** tabela resumida com Nome, Categoria e Pré-requisito; depois, listagem completa em ordem alfabética.
- **Magias:** tabelas agrupadas por Nível, com Nome, Nível, Caminho/Escola, Alcance e Custo/Ação. Cada nome aponta à página individual. O nível pode aparecer tanto no título do grupo quanto na coluna, conforme a leitura final da tabela.
- Nomes iguais podem aparecer como registros separados; preserve cada página e link individual.

As tabelas são geradas no build a partir dos arquivos publicados. O corpo detalhado continua na página individual.

### 5.2 Catálogos interativos

Cada Compêndio oferece uma lista navegável e um painel de detalhes sem exigir navegação para outra página durante a consulta. A seleção também deve oferecer um link permanente para a página individual.

- Pesquisa textual por título e campos textuais relevantes.
- Filtros por atributos estruturados confirmados; ainda não adicionar filtros com valores presumidos.
- Ordenação previsível, inicialmente alfabética; filtros e ordenação combináveis.
- Estado vazio claro, ação para limpar filtros e contagem de resultados.
- Links individuais devem funcionar sem JavaScript e continuar adequados para compartilhamento e impressão.
- Dados enviados ao catálogo público contêm apenas entidades publicadas.
- Avaliar carregamento particionado somente se o volume real justificar.

## 6. Publicação, busca e metadados

### 6.1 Regra de `published`

`published` tem default central `true`. Quando uma entidade tem `published: false`, ela não aparece em tabelas, listagens, índices de coleção, Compêndios ou busca pública. A página individual ainda pode existir e ser acessada por URL; portanto, o campo controla inclusão em saídas públicas indexadas, não acesso ou confidencialidade. Aplicar a mesma política a todas as coleções e idiomas.

### 6.2 Busca e URLs

Usar a busca integrada do Starlight se compatível com a estratégia de indexação. O índice público deve excluir entidades não publicadas. Slugs são estáveis e não dependem do título; alterações de título não devem alterar URLs. Uma alteração de slug exige atualização de links e, se viável, redirecionamento.

O site de organização usa URL na raiz `https://terra-vasta.github.io/`. Configurar o Astro sem segmento de caminho de projeto. Gerar links internos pelas APIs de rotas; não espalhar caminhos absolutos frágeis pelo conteúdo.

### 6.3 Idiomas e traduções

Português do Brasil (`pt-BR`) fica na raiz; inglês dos Estados Unidos (`en-US`) fica em `/en-us/`. Páginas equivalentes devem manter o mesmo caminho relativo para o seletor de idioma do Starlight. Usar `translationKey` estável nas versões equivalentes de cada entidade. Traduções devem ser revisadas e mantidas alinhadas; não assumir tradução automática.

## 7. Licenças e atribuição

- Regras e contribuições próprias do sistema A Terra Vasta: **CC BY-SA 4.0**.
- Código original do site: **MIT**.
- Conteúdo próprio do Cenário: licença ainda pendente.
- Marcas, nomes comerciais, logos, identidade visual e materiais de terceiros ficam fora dessas licenças, salvo autorização específica.
- Material reutilizado do SRD 5.2.1 continua sob CC BY 4.0, com avisos e atribuição próprios. A licença do projeto não substitui nem altera a licença do SRD.

> Atribuição do SRD 5.2.1: “This work includes material from the System Reference Document 5.2.1 (SRD 5.2.1) by Wizards of the Coast LLC, available at https://www.dndbeyond.com/srd. The SRD 5.2.1 is licensed under the Creative Commons Attribution 4.0 International License, available at https://creativecommons.org/licenses/by/4.0/legalcode.”

A página Créditos e licenças deve incluir a atribuição e deixar claro que não há endosso da Wizards of the Coast. Usar os avisos aplicáveis separadamente por material.

## 8. Interface, acessibilidade e impressão

- Tema claro e escuro; respeitar a preferência do sistema e manter contraste adequado.
- Layout responsivo. Em telas estreitas, tabelas amplas podem rolar horizontalmente sem ocultar conteúdo essencial.
- HTML semântico, hierarquia lógica de títulos, foco visível, navegação por teclado, rótulos associados e mensagens úteis a leitores de tela.
- Buscar como meta WCAG 2.2 AA.
- Catálogos acessíveis por teclado; mudanças de seleção e contagem de resultados anunciadas sem deslocamento inesperado do foco.
- Não usar apenas cor para comunicar estado ou categoria; ícones decorativos devem ser ocultados de tecnologias assistivas.
- CSS de impressão remove navegação e controles, preserva conteúdo e links relevantes, evita cortes e mantém contraste monocromático. Páginas individuais devem poder ser salvas como PDF pelo navegador.

### 8.1 Requisitos visuais da landing page

- Reservar a imagem principal a uma ilustração de ambientação que funcione em telas largas e estreitas, com enquadramento e ponto focal que não ocultem título ou controles.
- Disponibilizar texto alternativo que descreva o conteúdo informativo da imagem; se ela for puramente decorativa, usar alternativa vazia. Não embutir texto essencial apenas na imagem.
- Garantir contraste da frase de destaque e dos botões sobre fundos ilustrados, usando camada de contraste quando necessário.
- Carregar imagens em dimensões adequadas, com formatos modernos e dimensões explícitas para reduzir mudanças de layout. Evitar que a arte prejudique a velocidade ou a legibilidade.
- Aplicar os tokens de cor e tipografia da identidade ao tema claro e escuro; preservar contraste e foco visível em ambos.
- Limitar adornos e efeitos ao contexto editorial da página inicial. Tabelas, corpo de regras e páginas internas priorizam leitura e impressão.

## 9. Validação e testes

A validação deve rodar localmente e no GitHub Actions quando implementada. Erros de esquema ou integridade devem impedir a publicação.

| Camada | Verificações mínimas |
|---|---|
| Esquema | Frontmatter válido, tipos e campos obrigatórios por coleção. |
| Integridade | Slugs estáveis, nível e locale válidos, links internos resolvidos. |
| Listagens | `published: false` ausente de tabelas, listagens, busca e dados de catálogos; página individual pode existir. |
| Build | `astro build` conclui e emite as páginas esperadas. |
| Interface | Busca, filtros, painel, links, temas, teclado e viewport móvel. |
| Acessibilidade | Verificação automatizada e revisão manual de foco, landmarks, tabelas e anúncios. |
| Impressão | Revisar PDFs de páginas de referência e páginas individuais. |

Cobertura recomendada: testes unitários de filtragem/ordenação e geração de dados; testes de integração de rotas e busca; verificação de build; revisão manual de conteúdo e acessibilidade. Testes automatizados não substituem essas revisões. O `package.json` atual não contém script `test`; não presumir que exista.

## 11. Plano de implementação em etapas

1. **Fundação — concluída:** criar o repositório `Terra-Vasta/terra-vasta.github.io`, configurar Astro + Starlight, idiomas pt-BR/en-US, navegação Sistema/Cenário e publicação inicial no GitHub Pages por GitHub Actions.
2. **Modelo de conteúdo — estrutura inicial concluída:** configurar coleções, esquemas, defaults e metadados de tradução; revisar rótulos técnicos e popular com conteúdo piloto aprovado.
3. **Referências:** gerar páginas de Perícias e Talentos com tabela e listagem alfabética; gerar Magias por nível e links individuais.
4. **Compêndios:** implementar pesquisa, filtros, painel de detalhes e links permanentes usando os mesmos dados publicados.
5. **Qualidade:** validar filtro de conteúdo publicado, busca, metadados e overrides, acessibilidade, responsividade e CSS de impressão.
6. **Publicação contínua:** validar o workflow existente, documentar revisão e rollback e acompanhar deploys futuros.
7. **Identidade e landing page — implementação inicial concluída:** criar a estrutura da página em português e inglês, o cabeçalho global, o tema visual e a ilustração panorâmica escolhida pelo usuário (Opção A — Cidade sob névoa). Próximo: revisar a aparência em desktop e dispositivos móveis, aprovar os textos e confirmar os termos de uso da arte antes da publicação definitiva.
8. **Expansão:** acrescentar conteúdo real e evoluir filtros e traduções conforme decisões confirmadas.

## 12. Decisões pendentes

Não inventar respostas para estes pontos:

1. Ativo de arte final da landing page: a Opção A — Cidade sob névoa está em `public/images/taavira-hero-cidade-nevoa.webp`; ainda faltam aprovação editorial final e confirmação dos termos de uso para publicação. A versão anterior está preservada para comparação.
2. Aprovação final dos textos da landing page e decisão sobre exibir a nota contextual “momentos antes de arrancar os próprios olhos” junto à citação de Serkan Vhal.
3. Licença para conteúdo próprio da seção Cenário.
4. Nomes finais dos campos técnicos no frontmatter para os conceitos de Habilidade, Caminho/Escola e Custo/Ação, caso seja necessária distinção que o esquema atual não represente.
5. Filtros adicionais dos Compêndios além dos atributos estruturados confirmados.
6. Fluxo editorial detalhado para revisar e manter alinhadas as traduções pt-BR/en-US.

Quando uma tarefa depender de uma dessas decisões, avance no trabalho independente e identifique claramente a escolha que falta.
