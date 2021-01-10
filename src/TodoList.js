import React, { Component } from 'react';
import store from './store/index'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>哈哈</li>
                </ul>
            </div>
        );
    }
}

//把state变成props
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

//两个括号，表示函数的返回值还是一个函数
//第一个参数是映射store的数据到props，第二个是触发dispatch，第二个参数可以不传
export default connect(stateToProps, null)(TodoList);