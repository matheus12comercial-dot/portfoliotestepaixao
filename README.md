# Portfólio — Maria Neves

Site estático (sem build, sem dependências).

## Estrutura
- `index.html` — página inicial (apresentação, projetos, resumo, experiência, competências, formação, contato)
- `projetos/` — uma página por projeto. `_modelo.html` é o molde (tem {{CAMPOS}} para preencher)
- `css/style.css` — visual. Cores e fontes ficam nas variáveis no topo do arquivo
- `js/main.js` — menu do celular e ano do rodapé
- `assets/img/` — fotos (veja `assets/img/LEIA-ME.txt`)

## Testar no computador
Na pasta do site: `python -m http.server 8000` (Mac: `python3`) e abra http://localhost:8000

## Fotos: funcionam por NOME de arquivo
Cada espaço de imagem do site procura um arquivo com nome combinado em `assets/img/`.
Enquanto o arquivo não existir, aparece um bloco colorido com o nome esperado.
Quando você sobe o arquivo com esse nome, a foto aparece sozinha, sem mexer no código.

| Foto | Nome do arquivo | Proporção | Tamanho recomendado | Peso |
|---|---|---|---|---|
| Retrato (polaroid) | `retrato.webp` | 4:5 vertical | 1000 × 1250 px | até 200 KB |
| Capa de cada projeto | `<projeto>-capa.webp` | 16:9 ou 3:2 horizontal | 2000 px de largura | até 300 KB |
| Stills do projeto | `<projeto>-still-1.webp`, `-2`, `-3` | 3:2 horizontal | 1200 × 800 px | até 200 KB |
| Prévia de link (WhatsApp, LinkedIn) | `compartilhamento.jpg` | 1,91:1 | 1200 × 630 px | até 300 KB |

`<projeto>` = `contorcionista` ou `santo`.

## Ajustar o enquadramento de uma foto
No HTML, na tag `<img>` da foto, acrescente `style="object-position: 50% 20%"`
(primeiro número = horizontal, segundo = vertical; 0% = topo/esquerda, 100% = base/direita).

## Adicionar um projeto
1. Copie `projetos/santo.html` para `projetos/nome-do-novo.html` e edite título, ficha, texto e créditos.
2. Em `index.html`, copie um bloco `<a class="card">` e ajuste link, título, nome das imagens e `view-transition-name` (precisa ser único).
3. Atualize os links "Anterior/Próximo" nas páginas vizinhas.
4. Suba as fotos novas com os nomes `<novo>-capa.webp`, `<novo>-still-1.webp`...
