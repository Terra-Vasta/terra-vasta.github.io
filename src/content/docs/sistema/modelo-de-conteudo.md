---
title: Modelo de conteúdo
description: Como as entidades de jogo são armazenadas para alimentar o site.
---

Perícias, talentos e magias terão um arquivo Markdown por entidade. O frontmatter guarda os campos que alimentam tabelas, catálogos e filtros; o corpo do arquivo guarda o texto completo. Os mesmos arquivos servirão como fonte das páginas individuais e das listas.

## Localização e slugs

Cada idioma terá seu arquivo dentro da respectiva pasta (`pt-br` ou `en-us`) e compartilhará uma `translationKey` para relacionar versões. O nome do arquivo define um slug estável em minúsculas, sem acentos e separado por hífens. Títulos iguais são permitidos; o slug e a chave de tradução distinguem as entradas.

## Publicação

`published` assume `true` quando omitido. Com `published: false`, a entrada fica fora de tabelas e listagens. A página individual ainda poderá existir e ser acessada pelo endereço direto, conforme definido para o projeto.

## Campos das entidades

- **Perícia:** título, habilidade e exemplo de uso.
- **Talento:** título, categoria e pré-requisito opcional.
- **Magia:** título, nível inteiro (inclui nível 0), caminho/escola, alcance e custo/ação.

O texto e os valores específicos de jogo serão adicionados a partir do SRD 5.2.1 ou de material original aprovado para Terra Vasta. Esta página não cria regras ou entradas fictícias.
