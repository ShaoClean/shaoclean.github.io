---
icon: javascript
date: 2022-11-14
star: 10
category:
  - 前端
  - JS
tag:
  - drag
  - 学习笔记
---
# 元素拖拽
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .list{
      width: 100vw;
    }
    .list-item{
      margin: 10px auto;
      width: 600px;
      height: 40px;
      line-height: 40px;
      border-radius: 2px;
      background-color: blueviolet;
      color: white;
      vertical-align: baseline;
      cursor: move;
    }
    .list-item.moving{
      background: transparent;
      color: transparent;
      border: 1px dashed #ccc;
    }
  </style>
</head>
<body>
  <div class="list">
    <div draggable="true" class="list-item">1</div>
    <div draggable="true" class="list-item">2</div>
    <div draggable="true" class="list-item">3</div>
    <div draggable="true" class="list-item">4</div>
    <div draggable="true" class="list-item">5</div>
  </div>
  <script>
    const list = document.querySelector(".list");
    let sourceNode
    
    list.ondragstart = (e)=>{
      //拖动的样式是点下鼠标的那一刻原始元素的样式，因此需要异步处理，等该元素已经开始拖动过后，等一会会在添加moving样式 
      setTimeout(() => {
        e.target.classList.add('moving');
      },0)
      //记录当前拖拽元素
      sourceNode = e.target
      e.dataTransfer.effectAllowed = 'move'
    }
    //元素拖动结束后，但是动画会显示被拖动的元素回到了原来的位置，因为很多元素默认情况下不允许别的元素拖到自身之上的
    //因此需要阻止掉事件默认行为
    list.ondragover = (e) => {
      e.preventDefault()
    }
    list.ondragenter = (e) => {
      e.preventDefault()
      if(e.target === list || e.target === sourceNode){
        return
      }
      const children = Array.from(list.children);
      //当前元素的下标
      const sourceIndex = children.indexOf(sourceNode);
      //目标元素的下标
      const targetIndex = children.indexOf(e.target);

      //处理向下拖动和向上拖动的两种不同情况
      if(sourceIndex < targetIndex){
        //向下拖动
        list.insertBefore(sourceNode,e.target.nextElementSibling)
      }else{
        //向上拖动
        list.insertBefore(sourceNode,e.target)
      }
    }
    list.ondragend = (e) => {
      e.target.classList.remove('moving')
    }
  </script>
</body>
</html>
```