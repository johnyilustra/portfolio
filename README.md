# Portfólio — Designer & Ilustrador

Site estático (HTML + CSS + JavaScript puro), sem build e sem dependências.

## Estrutura

```
.
├── index.html            # Página principal
├── css/
│   └── style.css         # Todos os estilos
├── js/
│   └── main.js           # Filtro de projetos
├── assets/
│   └── img/              # Coloque aqui suas imagens
├── .github/workflows/
│   └── pages.yml         # Publicação automática no GitHub Pages
├── .nojekyll
├── .gitignore
└── README.md
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos estes arquivos para a branch `main`.
2. Vá em **Settings → Pages**.
3. Em **Source**, escolha **GitHub Actions**.
4. A cada push na `main` o site é publicado automaticamente.
   O endereço será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

> Alternativa sem Actions: em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.

## Rodar localmente

Basta abrir o `index.html` no navegador.

## Como personalizar

- **Nome, textos e links:** edite o `index.html` (procure por "Seu Nome", `href="#"` nos botões de contato e redes sociais).
- **Cores:** variáveis no início do `css/style.css` (`:root`).
- **Imagens:** hoje usam placeholders do `picsum.photos`. Salve suas imagens em `assets/img/` e troque os `src`, por exemplo:
  `<img src="assets/img/projeto-01.jpg" alt="Descrição do projeto">`
- **Novo projeto:** copie um bloco `<article class="project ...">` e ajuste o `data-category` (`design`, `illustration`, `character`, `editorial`) para o filtro funcionar.
