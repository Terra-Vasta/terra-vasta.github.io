---
title: Modelo de conteúdo
description: Como as entidades e tabelas de jogo são estruturadas no site.
---

Perícias, talentos e magias terão um arquivo Markdown por entidade. O frontmatter guarda os campos de tabelas, catálogos e filtros; o corpo guarda o conteúdo completo.

## Resumo por entidade

| Entidade | Campos da tabela resumida | Apresentação no site |
| --- | --- | --- |
| Perícia | Nome, Habilidade, Exemplo de uso | Resumo, lista alfabética e página individual |
| Talento | Nome, Categoria, Pré-requisito | Resumo, lista alfabética e página individual |
| Magia | Nome, Nível, Caminho/Escola, Alcance, Custo/Ação | Tabelas por nível e páginas individuais |

## Modelos de tabela

### Tabela normal

Use uma tabela Markdown para conteúdo curto ou de consulta rápida.

| Perícia | Habilidade | Exemplo de uso |
| --- | --- | --- |
| Acrobacia | Destreza | Manter o equilíbrio |
| Arcanismo | Inteligência | Reconhecer um símbolo mágico |

### Tabela grande

Anteponha `::table-large[Título da tabela]` imediatamente antes da tabela. A variante acrescenta título acessível, linhas alternadas e rolagem horizontal em telas estreitas.

::table-large[Exemplo de catálogo de perícias]

| Perícia | Habilidade | Exemplo de uso |
| --- | --- | --- |
| Acrobacia | Destreza | Manter o equilíbrio em uma superfície estreita |
| Arcanismo | Inteligência | Identificar símbolos ou fenômenos mágicos |
| Atletismo | Força | Escalar, saltar ou nadar |
| Furtividade | Destreza | Mover-se sem chamar atenção |

## Termos com popup

Em qualquer `.md`, escreva `:term[Acrobacia]{href="/sistema/modelo-de-conteudo/#acrobacia"}`. O popup busca a prévia na página indicada; não repita o texto junto ao link.

## Acrobacia

### Prévia do popup

Esta prévia é somente uma demonstração visual. O bloco aceita parágrafos, **ênfase**, listas, imagens e outros elementos Markdown.

![Ruínas de uma cidade envoltas em névoa.](/images/taavira-hero-cidade-nevoa.webp)

- O conteúdo é mantido na página de destino.
- Links para a página completa continuam funcionando.

### Conteúdo completo

Este conteúdo fora do bloco aparece normalmente na página e não é copiado para o popup.

O popup fica ao lado do termo, com um espaço entre eles, e muda de lado quando necessário para manter o termo visível. Passe o cursor ou use foco pelo teclado; em telas touch, toque para abrir.

## Localização e slugs

Cada idioma tem seu arquivo e compartilha uma `translationKey`. O nome do arquivo define um slug estável em minúsculas, sem acentos e separado por hífens.

## Publicação e campos

`published` assume `true` quando omitido. Com `published: false`, a entrada fica fora das tabelas e listas públicas. Perícias usam título, habilidade e exemplo de uso; talentos usam título, categoria e pré-requisito opcional; magias usam título, nível, caminho/escola, alcance e custo/ação.

O texto e os valores específicos de jogo virão do SRD 5.2.1 ou de material original aprovado. Esta página não define regras.
