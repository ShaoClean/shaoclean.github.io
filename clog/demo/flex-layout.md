---
icon: eye
date: 2022-11-02
article: true
category:
  - demo
tag:
  - flex-layout
star: 10
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .container{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    header{
      width: 100vw;
      height: 100px;
      background-color: antiquewhite;
    }
    main{
      overflow: scroll;
    }
    main::-webkit-scrollbar{
      display: none;
    }
    footer{
      width: 100vw;
      height: 100px;
      background-color: blue;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>

    </header>
    
    <main>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
    </main>

    <footer>

    </footer>
  </div>
</body>
</html>

```