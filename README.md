# Site de portfólio (modelo)

Site estático: sem build, sem dependências. Basta abrir via servidor local ou publicar a pasta.

## Estrutura
- `index.html` — página inicial (apresentação, projetos, sobre, contato)
- `projetos/` — uma página por projeto. `_modelo.html` é o molde (contém {{CAMPOS}} para preencher)
- `css/style.css` — visual (cores e fontes nas variáveis no topo do arquivo)
- `js/main.js` — menu, animações ao rolar
- `assets/img/` e `assets/video/` — suas imagens (WebP) e vídeos curtos

## Testar no computador
Na pasta do site: `python -m http.server 8000` e abra http://localhost:8000
(ou use a extensão "Live Server" do VS Code). Abrir o index.html com duplo clique funciona,
mas as transições entre páginas só aparecem via servidor.

## Adicionar um projeto
1. Copie `projetos/projeto-um.html` para `projetos/nome-do-novo.html`
2. Edite título, ficha, sinopse, créditos e vídeo
3. Em `index.html`, copie um bloco `<a class="card">` e ajuste link, título e `view-transition-name` (único!)
4. Atualize os links "Anterior/Próximo" nas páginas vizinhas
