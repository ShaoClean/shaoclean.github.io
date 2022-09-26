---
icon: javascript
date: 2022-09-26
star: 10
category:
  - 前端
  - JS
tag:
  - table
  - 学习笔记
---

# Table相关

## tr设置下边框

在table中有一个默认的属性`border-collapse`它的可选值是：
- separate 默认值。边框会被分开。不会忽略border-spacing 和 empty-cells 属性。
- collapse 如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。
- inherit 规定应该从父元素继承border-collapse 属性的值。

例：有如下表格需要显示其每一列的下边框
```html
<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Adress</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
```

所以需要设置tr的下边框，需要改变这个默认的属性值改为`collapse`使其边框合并

```css
  table{
    border-collapse: collapse;
  }
  tr{
    border-bottom: 1px solid #999;
  }
  th,td{
    width:100px;
    text-align: center;
  }
```

结果如图：

![image-20220926225822888](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220926225822888.png)