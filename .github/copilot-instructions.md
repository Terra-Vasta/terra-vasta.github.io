# Instruções do Copilot para Terra Vasta

## Objetivo do projeto

Este repositório contém o site principal do sistema e do cenário Terra Vasta: <https://terra-vasta.github.io/>. O repositório é `Terra-Vasta/terra-vasta.github.io` e o site é compilado como conteúdo estático com Astro e Starlight, hospedado no GitHub Pages.

Antes de alterar o projeto, leia estas instruções, `docs/especificacao-tecnica.md`, o `README.md`, o `AGENTS.md` e os arquivos relevantes ao pedido. A especificação técnica registra requisitos e decisões de produto; confira também o estado atual do código, que é a referência do que já está implementado.

## Estado atual

- O esqueleto Astro + Starlight, as páginas iniciais em português e inglês, a navegação básica e o deploy pelo GitHub Actions já existem.
- As coleções e esquemas iniciais de Perícias, Talentos e Magias estão em `src/content.config.ts`.
- As páginas de referência e os catálogos interativos ainda precisam evoluir. Não afirme que filtros, painéis de detalhes ou conteúdo canônico já estão implementados sem verificar o código.
- Ainda não há conteúdo canônico de jogo fornecido pelo autor. Exemplos em páginas ou frontmatter são apenas estruturais; não os transforme em regras oficiais nem invente entradas para preencher o site.
- A identidade visual e a descrição editorial final ainda não foram definidas. Preserve os estilos e tokens existentes; não crie logos, marcas ou uma identidade visual definitiva sem solicitação.

## Decisões de produto

- O nome atual do cenário e do sistema é **Terra Vasta**.
- O SRD de referência é o **D&D SRD 5.2.1**, a versão escolhida pelo autor. Use apenas conteúdo presente no SRD autorizado pelo projeto. Preserve a atribuição da Wizards of the Coast e não sugira endosso.
- O conteúdo próprio de regras do sistema Terra Vasta é licenciado sob **CC BY-SA 4.0**; o código original do site, sob **MIT**. Consulte `LICENSE-CONTENT.md` e `LICENSE-CODE.md` antes de alterar os avisos.
- A licença para conteúdo próprio do **Cenário** ainda não foi definida. Não declare que ela é CC BY-SA 4.0 nem inclua conteúdo de cenário de terceiros sem uma decisão/autorização aplicável.
- Marcas, nomes comerciais, logos, identidade visual e materiais de terceiros não estão cobertos pelas licenças do projeto.
- Não copie material fora do SRD 5.2.1 (por exemplo, conteúdo de livros, regras básicas não incluídas no SRD, nomes protegidos, logos ou arte). Se uma tarefa depender disso, explique a lacuna e proponha uma alternativa original.

## Idiomas

- Português do Brasil (`pt-BR`) é o idioma principal e ocupa a raiz do site (`/`).
- Inglês dos Estados Unidos (`en-US`) também deve existir desde o início, sob `/en-us/`.
- Mantenha as páginas equivalentes com o mesmo caminho relativo em cada idioma para que o seletor de idioma do Starlight possa associá-las.
- Para entidades, use a mesma `translationKey` nas traduções correspondentes e o `locale` apropriado (`pt-BR` ou `en-US`). Não traduza automaticamente texto de regras sem pedido; traduções precisam ser revisadas e mantidas alinhadas.
- Ao criar ou alterar uma página em um idioma, procure a página equivalente no outro idioma. Informe quando a tradução estiver ausente ou desatualizada; não invente uma tradução editorial como se estivesse aprovada.

## Organização técnica

- Use Astro, Starlight, Astro Content Collections e os padrões já adotados no repositório. Não substitua a arquitetura ou adicione um framework sem necessidade clara e autorização do usuário.
- Páginas editoriais ficam em `src/content/docs/`; traduções inglesas ficam em `src/content/docs/en-us/` com o mesmo caminho relativo.
- Esquemas das coleções ficam em `src/content.config.ts`.
- Estilos globais do site ficam em `src/styles/custom.css`. Preserve suporte ao tema claro e escuro do Starlight, comportamento responsivo e estilos de impressão existentes.
- Configuração de site, rotas, idiomas e navegação fica em `astro.config.mjs`.
- O endereço principal usa a raiz `https://terra-vasta.github.io/`; evite caminhos absolutos frágeis e gere links usando as APIs/rotas existentes do Astro e Starlight.
- Não edite arquivos gerados em `dist/`, `.astro/` ou `node_modules/` como fonte de implementação.
- Não atualize dependências ou o lockfile incidentalmente. Se uma atualização for necessária, explique o motivo e limite as mudanças ao escopo pedido.

## Conteúdo de Perícias, Talentos e Magias

Cada entidade deve ter um arquivo Markdown individual. Esse arquivo é a fonte única de verdade para sua página individual, tabelas, listagens, busca e dados de catálogo. Não copie os mesmos dados manualmente para arquivos diferentes.

Os rótulos de tabela confirmados são:

- **Perícias:** Nome, Habilidade, Exemplo de uso.
- **Talentos:** Nome, Categoria, Pré-requisito.
- **Magias:** Nome, Nível, Caminho/Escola, Alcance, Custo/Ação.

Use a base de campos do SRD 5.2.1. Os identificadores técnicos usados hoje nos esquemas são `habilidade`, `exemploDeUso`, `categoria`, `preRequisito`, `nivel`, `caminhoOuEscola`, `alcance` e `custoOuAcao`. Se for necessário renomear um campo, atualize o esquema, os arquivos de conteúdo, os componentes e a documentação relacionada de forma consistente.

Regras de conteúdo:

- Toda magia tem nível; o nível mínimo aceito no esquema atual é `0`.
- Títulos iguais não autorizam descartar ou mesclar registros. Preserve entradas distintas com slugs distintos e mantenha os links individuais inequívocos. Não acrescente uma validação de título único sem pedido do autor.
- Não adivinhe valores, categorias ou regras ausentes. Registre a lacuna como pendência e peça a definição necessária quando ela impedir a implementação correta.
- Preserve o texto integral no arquivo individual; tabelas são resumos e apontam para a página da entidade.

### Campo `published`

- `published` tem default central `true` no esquema de cada entidade. Inclua-o explicitamente nos arquivos novos quando isso tornar a intenção editorial mais clara; não invente outro default.
- `published: false` remove a entidade de tabelas, listagens alfabéticas, índices, catálogos e busca pública.
- O autor aceita que a página individual de uma entidade não publicada ainda possa existir e ser acessada por URL. Portanto, esse campo controla inclusão nas saídas públicas indexadas; não é controle de acesso ou sigilo.
- Aplique a mesma regra em português e inglês. Uma tradução não deve aparecer em listas se a política de publicação do registro correspondente a excluir.

## Páginas de referência e Compêndios

- **Perícias:** página de referência com tabela resumida e listagem completa em ordem alfabética.
- **Talentos:** página de referência com tabela resumida e listagem completa em ordem alfabética.
- **Magias:** tabelas resumidas agrupadas por nível, com links para páginas individuais. Magias são sempre de nível definido.
- **Compêndios:** oferecer catálogos interativos para Perícias, Talentos e Magias, com filtros e painel de detalhes. A página individual continua sendo um destino compartilhável e acessível sem depender da interface interativa.
- Gere essas visualizações a partir das coleções já existentes e filtre `published` antes de criar os dados públicos. Não mantenha uma cópia manual de cada entidade em um componente.
- Os campos exatos de filtros além das colunas confirmadas ainda não foram fechados. Use atributos estruturados existentes e mantenha a pesquisa textual simples; não introduza campos novos ou filtros com semântica presumida. Se a escolha alterar o modelo ou as regras de navegação, indique-a como pendência antes de codificar.
- Preserve ordenação previsível, estado vazio compreensível, opção de limpar filtros, contagem de resultados e links permanentes.

## Metadados e apresentação editorial

- Por padrão, não exiba data, autor ou versão nas páginas.
- Se um pedido futuro ativar esses metadados, permita overrides editoriais por campo. Uma data/autor derivados do Git só podem ser mostrados quando o dado for confiável; commits sem autoria confiável não devem gerar uma atribuição inventada.
- Não mostre campos vazios nem rótulos sem valor.
- A descrição final do site, a identidade visual e os filtros adicionais são decisões pendentes, não fatos a completar por conta própria.

## Acessibilidade e qualidade da interface

- Use HTML semântico, hierarquia correta de títulos, foco visível, navegação por teclado, rótulos associados e contraste legível.
- Todos os controles de catálogo devem funcionar por teclado e comunicar seleção, filtros ativos e contagem de resultados a tecnologias assistivas.
- Não use apenas cor para indicar estado ou categoria.
- Em telas estreitas, preserve o acesso ao conteúdo das tabelas, permitindo rolagem horizontal quando necessário.
- Mantenha o CSS de impressão útil para leitura e salvamento em PDF: o conteúdo deve permanecer completo, com contraste e sem controles de interface supérfluos.
- Prefira mudanças pequenas, coerentes com a aparência e os componentes já presentes.

## Pendências que não devem ser decididas pelo Copilot

1. Identidade visual final, logo, marcas e descrição editorial do site.
2. Licença para o conteúdo próprio da seção Cenário.
3. Campos técnicos finais para `Habilidade`, `Caminho/Escola` e `Custo/Ação`, se a implementação exigir uma distinção que o esquema atual não representa.
4. Filtros adicionais do Compêndio e o fluxo editorial detalhado de revisão das traduções.

Quando uma tarefa depender de uma dessas decisões, continue as partes independentes e deixe claro qual escolha está faltando. Não bloqueie trabalho que possa ser feito sem ela.

## Fluxo de trabalho

1. Leia as instruções e os arquivos relacionados antes de editar.
2. Faça mudanças pequenas e preserve o conteúdo, o idioma e o estilo existentes.
3. Ao alterar conteúdo, verifique se a mudança precisa de uma página equivalente no outro idioma e se as fontes derivadas continuam usando apenas entidades publicadas.
4. Não adicione bibliotecas, conteúdo de jogo, dados de exemplo apresentados como canônicos, ou novas categorias sem necessidade e aprovação compatíveis com o pedido.
5. O projeto não tem script `test` configurado. Para desenvolvimento local, use Node.js 24 e pnpm 12.16.0 (fixado em `package.json`), conforme o `README.md`; use `pnpm build` quando o usuário pedir verificação ou quando a tarefa incluir explicitamente a validação do build.
6. O workflow `.github/workflows/deploy.yml` publica alterações enviadas a `main`. Não faça push, publicação manual, alteração de configurações do GitHub ou mudanças de licença sem solicitação explícita.
7. Ao concluir, resuma os arquivos alterados, o comportamento implementado, verificações executadas e decisões pendentes. Não declare que um teste ou build passou se ele não foi executado.
