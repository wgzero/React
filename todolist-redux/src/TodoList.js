/*
 * @Description: 
 * @Version: 1.0
 * @Author: zero
 * @Date: 2019-08-20 23:01:03
 * @LastEditors: zero
 * @LastEditTime: 2019-08-21 18:09:09
 */
import React, { Component } from 'react'
// import store from './store'
import { connect } from 'react-redux'
class TodoList extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = store.getState()
    // }
    render(){
        return (
                <div>
                    <input 
                        value={ this.props.inputValue } 
                        onChange={this.props.changeInputValue}
                        />
                    <button onClick={this.props.handleAddValue}>点击</button>
                    <ul>
                        {
                            this.props.list.map((item, index) => {
                                return <li onClick={() => this.props.handleDelete(index)} key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            )
    }
    // handleChangeClick(e){
    //     console.log(e.target.value)
    // }
}
// 把state映射给props，而state就是指store里面的数据
const mapStateToProps = (state) => {
    // 返回一个对象
    return {
        inputValue: state.inputValue,
        // 数据映射
        list: state.list,
        index: state.index
    }
}
// 把store.dispatch方法挂载到props上面
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            // console.log(e.target.value)
            const action  = {
                type: 'change_input_value',
                value: e.target.value
            } 
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

// connect是react-redux中提供的API接口做联调的，store数据传递
// 提供两个参数当做数据传递
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);