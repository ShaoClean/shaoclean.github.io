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

**闭包陷阱**

需要注意一下这种使用方式会存在的问题：

```jsx
function App() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    function logCount(){
      console.log('count:',count);
    }

    window.addEventListener('click',logCount)

    return ()=>{
      window.removeEventListener('click',logCount)
    }
  },[])

	return (
	  <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((v)=>++v)}>+</button>
	  </div>
	)
}
```

解读一下这个组件中的`useEffect`：

首次渲染的时候，在其中声明了一个`logCount`函数，用于打印当前`count`的值；在window上绑定了点击事件，用于触发`logCount`函数。且此过程只会在首次渲染的时候执行。

存在的问题：

当点击`button`按钮的时候，页面上的值是正常的在显示的。可是控制台中输出的值就不正常了，一直都是一开始的0

分析：

根据解读可以发现，`useEffect`函数中的过程只会在首次渲染的时候执行。也就是说，在count的值发生变化页面重新渲染的时候，`window.addEventListener`所绑定事件的引用，一直都是一开始的那个函数，而一开始的那个函数中的count所指向的就是0，所以一直没有变化。



解决：

只需要在count改变的时候，重新执行一下`useEffect`中的过程，这样就可以保证每次cout的值发生改变的时候，点击事件的引用都是最新的。

```jsx
useEffect(()=>{
  function logCount(){
    console.log('count:',count);
  }

  window.addEventListener('click',logCount)

  return ()=>{
    window.removeEventListener('click',logCount)
  }
},[count])//这里
```

也可以用`useRef`来实现：

由于`useRef`的值改变之后不会发生页面的重新渲染，所以当前添加的事件引用一直都是同一个状态，不存在函数引用了旧的值的问题

```jsx
  const count = useRef(0)

  useEffect(()=>{
    function logCount(){
      console.log('count:',count.current);
    }

    window.addEventListener('click',logCount)

    return ()=>{
      window.removeEventListener('click',logCount)
    }
  },[])

```


让我想到了之前在学习词法作用域时碰到过的问题：

```js
const a = 1;

function logA(){
    console.log('a:',a);
}

function b(){
    let a = 2;
    logA()
}

b()
//a:1
```





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



## 5.useMemo

useMemo用于缓存重新渲染前的计算结果，当所依赖的项没有发生变化时不会再次计算。

`calculateValue`：需要缓存的值，一般是一个具有返回值的函数

`dependencies`:依赖项

基本用法：

```js
const cachedValue = useMemo(calculateValue, dependencies)
```

`calculateValue`可以是任何数据类型，但是用于缓存一个函数时用`useCallback`更方便。

看一个例子：

```jsx
import { useEffect, useState } from "react";

function BasicPrimesCaculator() {
	const [selectedNum, setSelectedNum] = useState(100);

	const time = useTime();

	console.log("BasicPrimesCaculator is re-render");
  // 优化前
	const allPrimes = [];
	for (let counter = 2; counter < selectedNum; counter++) {
		if (isPrime(counter)) {
			allPrimes.push(counter);
		}
	}
  // 优化后
  const allPrimes = useMemo(()=>{
    const res = []
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        res.push(counter);
      }
    }
    return res
  },[selectedNum])

	return (
		<>
			<p className="clock">{time.toString()}</p>
			<form>
				<label htmlFor="num">Your number:</label>
				<input
					type="number"
					value={selectedNum}
					onChange={event => {
          	//100_000 === 100000 方便阅读
						let num = Math.min(100_000, Number(event.target.value));
						setSelectedNum(num);
					}}
				/>
			</form>
			<p>
				There are {allPrimes.length} prime(s) between 1 and{" "}
				{selectedNum}:{" "}
				<span className="prime-list">{allPrimes.join(", ")}</span>
			</p>
		</>
	);
}

function isPrime(n: number) {
	const max = Math.ceil(Math.sqrt(n));

	if (n === 2) {
		return true;
	}

	for (let counter = 2; counter <= max; counter++) {
		if (n % counter === 0) {
			return false;
		}
	}

	return true;
}

function useTime() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, []);

	return time;
}

export default BasicPrimesCaculator;
```

上面的组件用于计算指定数字范围内的素数。每次重新输入一个数字时，通过`setSelectedNum`重新设置`selectedNum`的值并重新渲染组件，每次渲染的时候重新计算指定数字内的素数。此时，还有一个另外一个组件，在页面上实时展示时间，每隔一定的时候重新渲染一次页面，使得整个页面重新渲染一次。

很容易发现一个问题，时间的变化会造成素数的重新计算，如果这里计算的不是素数，而是其他的复杂计算，那么这样做显然是有问题的。现在的需求也十分的明显，我指定的数字范围（`selectedNum`）没有变化的时候，我不希望它重新计算一遍，以达到优化的目的。

这个时候就可以使用`useMemo`来缓存这个复杂的计算过程，并指定依赖的对象为`selectedNum`。这也就意味着selectedNum没有发生改变的时候，这个计算过程将不再进行。此时，页面上的时间在每次重新渲染的时候，不会影响到这个计算过程的重复。



当然也有其他的方式来解决这个重新渲染的问题：

### 1.拆分组件

将两个功能拆分成两个组件，这样时间在重新渲染的时候也不会造成计算的重复进行。

下面是大致的事例：

```tsx
function App(){
  return (
  	<>
    	<TimeComponent/>
    	<CalculateComponent/>
    <>
  )
}
```



## 6.useCallback

`useCallback`用于缓存一个函数

`useMemo`用于缓存函数时的语法糖

count 每次变化的时候会将 CallBackContainer重新渲染 handleMegaBoost函数也会重新创建一次 

由于判断两个函数是否相同 比较的是两个函数之间的引用 所以每次重新渲染的时候都是一个新的函数 也会导致MegaBoost重新渲染

使用useCallback 可以对函数进行缓存 也就是渲染前后两个函数是同一个引用 使得每次重新渲染后 handleMegaBoost函数不会重新创建

```jsx
import React, { useCallback } from 'react';

import MegaBoost from './MegaBoost';

function CallBackContainer() {
  const [count, setCount] = React.useState(0);

//   function handleMegaBoost() {
//     setCount((currentValue) => currentValue + 1234);
//   }

  const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  },[])

  return ( 
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}

export default CallBackContainer;
```

 

