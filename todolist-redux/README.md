# todolist-redux项目技术实现

## 1.安装

```js
npm install redux react-redux
```



## 2.mapStateToprops

```js
//mapStateToProps：把state映射给props，而state就是指store里面的数据
// 处理数据的
const mapStateToProps = (state) => {
    // 返回一个对象
    return {
        inputValue: state.inputValue,
        // 数据映射
        list: state.list,
        index: state.index
    }
}
```

## 3.mapDispatchToProps

```js
//mapDispatchToProps：把store.dispatch方法挂载到props上面
// 处理方法的
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            // console.log(e.target.value)
            // action传递的是验证身份
            const action  = {
                type: 'change_input_value',
                value: e.target.value
            } 
            // 最后添加到dispatch上
            dispatch(action)
        },
        handleAddValue(){
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        // 删除功能
        handleDelete(index){
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}
```

## 4.connect

```jsx
//connect是react-redux中提供的API接口做联调的，store数据传递，提供两个参数当做数据传递
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

## 5.Provider提供者

```js
const App = (
    <Provider store={ store }>
        <TodoList />
    </Provider>
)
```

## 6.创建store文件夹

```js
// index.js文件
import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(reducer)

export default store;

// reducer.js文件
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        // 数据的深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state;
}

```



## 7.