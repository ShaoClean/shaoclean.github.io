---
icon: eye
date: 2022-11-02
article: true
category:
  - demo
tag:
  - flex-layout
---

# Flex 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      header {
        width: 100vw;
        height: 20vh;
        background-color: antiquewhite;
      }
      main {
        overflow: scroll;
        background-color: rgb(179, 143, 143);
        height: 100%;
      }
      main::-webkit-scrollbar {
        display: none;
      }
      footer {
        width: 100vw;
        height: 20vh;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header></header>

      <main>
        <h1>1</h1>
        <h1>1</h1>
      </main>

      <footer></footer>
    </div>
  </body>
</html>
```
