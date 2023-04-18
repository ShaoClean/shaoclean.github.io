---
icon: react
date: 2023-04-06
category:
  - 前端
tag:
  - 学习笔记
  - react-hooks
---

# React Hooks

常见的hooks有

## 1.useState

```jsx
function Count(){
  const {count,setCount} = useState(0);
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
```
虽然count的改变会导致组件重新渲染（函数重新调用），按理说useState那一行代码会重新执行，count的值应该是一直都是0。但是React的底层做了处理，缓存了count的值，忽略掉了`useState(0)`中的0。不会因为再次渲染将之前的值覆盖掉


## 2.useEffect

该hook接受两个参数：

- setup（回调函数）
- dependencies（依赖数组） 可选

组件会在初次渲染并执行完组件中的代码时最后调用`useEffect`中的`setup`函数。

如果该回调返回了一个函数，那么这个返回的函数会在该组件销毁的时候调用

其依赖的数据发生变化时，也就是`dependencie`数组中的数据发生变化时，`setup`函数会再一次触发。

**如果组件重新进行了渲染**

此时，如果`setup`函数中有返回一个函数（官方说法叫cleanup函数，cleanup函数中的代码叫clean code）。那么在重新渲染的时候：

1.先执行组件中的同步代码

2.然后执行cleanup函数

3.然后才是执行setup函数

而且`cleanup`函数中的`props`和`state`都是旧的。

## 3.useRef

引用一个不需要被渲染的值

**参数：**

可以是任何类型的数据。但是初始化过后，这个参数就将会被忽视。也就是说，重新渲染组件的时候，就不会重复创建这个值。

**返回值：**

返回一个对象，对象中只有一个`current`属性。这个属性的值不会因为re-render而重复创建。

如果将ref对象作为ref属性传递给JSX节点，current会返回一个dom元素（用法和vue3中的ref类似，传入的参数都会被忽略。只是在获取dom元素的时候有区别，v3用的是`.value`，react用的是`.current`）

## 4. useContext

使用由`createContext`创建的上下文对象。

`createContext`用法1:

使用`useContext`获取`createContext`创建时的原始值

```jsx
const myContext = createContext('hello im context');

function A(){
  const uc = useContext(myContext);
  return (
  	<div>
    	{uc}
    </div>
  )
}
```

`createContext`用法2:

`createContext`相当于创建了一个组件，在模板中使用其`myContext.Provider`组件。并传递给它唯一一个props属性，`value`。

在它的字组件中，可以使用其`myContext.Consumer`组件。在该组件中可以使用函数，这个函数接收一个参数，就是value传递过来的值。而且这个值是响应式的。

```jsx
const myContext = createContext('hello im context');
function B(){
  const customValue = 'hihihi!'
  return (
  	<myContext.Provider value={customValue}>
    	<C/>
    </myContext.Provider>
  )
}


function C(){
  
  return (
  	<myContext.Consumer>
    	{
        content => content
      }
    </myContext.Consumer>
  
  )
}
```



5. useCallback

