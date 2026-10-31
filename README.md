# A Terra Vasta

Site principal do sistema e cenário A Terra Vasta, publicado em [terra-vasta.github.io](https://terra-vasta.github.io/).

O site usa Astro e Starlight. A documentação é escrita em Markdown/MDX; as coleções de perícias, talentos e magias ficam em arquivos individuais e serão usadas para gerar as referências e os Compêndios.

## Idiomas

- Português (Brasil): raiz do site (`/`)
- English (US): `/en-us/`

Páginas equivalentes mantêm o mesmo caminho dentro de cada locale para que Starlight associe as traduções e ofereça conteúdo de fallback.

## Desenvolvimento local

Requisitos: Node.js 24 e pnpm 12.16.0. A versão do pnpm está fixada em `package.json` e também no workflow de publicação.

```sh
pnpm install
pnpm dev
```

Se o Corepack reclamar de um arquivo `pnpm.cjs` ausente no cache, ative novamente a versão fixada pelo projeto e tente instalar as dependências:

```sh
corepack prepare pnpm@12.16.0 --activate
pnpm --version
pnpm install
```

O build estático fica em `dist/`:

```sh
pnpm build
pnpm preview
```

## Conteúdo de jogo

Cada perícia, talento ou magia será um Markdown individual com frontmatter validado em `src/content.config.ts`. O campo `published` usa `true` como padrão; `false` exclui a entidade das tabelas e listagens, embora sua página individual possa continuar disponível por URL.

## Licenças

- Regras e contribuições próprias do sistema A Terra Vasta: CC BY-SA 4.0, conforme `LICENSE-CONTENT.md`.
- Código original do site: MIT, conforme `LICENSE-CODE.md`.
- Conteúdo reutilizado do SRD 5.2.1: CC BY 4.0 e atribuição da Wizards of the Coast, detalhadas na página [Créditos e licenças](https://terra-vasta.github.io/creditos-e-licencas/).
- Marcas, logos, identidade visual e outros materiais de terceiros não estão cobertos por essas licenças.

## Publicação

O workflow `.github/workflows/deploy.yml` compila e publica o site no GitHub Pages ao receber alterações em `main`.
