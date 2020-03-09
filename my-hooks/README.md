

# React-hooks(钩子)

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## 1.hooks是与函数一起连用的

##### A.useState就相当于this.state

```jsx
import React, { useState } from 'react'

function App(){
    // num是定义的常量 setNum是改变常量的方法
    const [num, setNum] = useState(0)
    return (
    	<div>
          <h1>{ num }</h1>
          <button onClick={() =>setNum(num+1)} >点击</button>
        </div>
    )
}
```

##### B.Effect就相当于`componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。

```jsx
import React, { useState, useEffect } from 'react';

function App() {

  const [num, setNum] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      document.title = 'hello zero'
    }, 3000)
  })


  return (
    <div>
      <h1>{ num }</h1>
      <button onClick={() =>setNum(num+1)} >点击</button>
    </div>
  )
}

export default App;
```

##### C.Hook 需要在我们组件的最顶层调用

```jsx
// 🔴 在条件语句中使用 Hook 违反第一条规则 
// 错误
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }
// 正确
useEffect(function persistForm() {
    // 👍 将条件判断放置在 effect 中
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
```

##### D.清除Effect

```jsx
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

##### E.useContext

接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `value` prop 决定。

```jsx
import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
// 创造颜色
const ThemeContext = React.createContext(themes.light);
// 应用初始启动
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
// 中间传递
function Toolbar(props) {
  console.log('props', props)  // {}
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 绑定ThemeContext.Provider
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      hello  zero
    </button>
  );
}

export default App;
```

