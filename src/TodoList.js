import React, { Component } from 'react';
import store from './store/index'
import { connect } from 'react-redux'

class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button onClick={this.props.clickButton}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

//把state变成props
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            let action = {
                type: 'add_item',
            }
            dispatch(action)
        }
    }
}

//两个括号，表示函数的返回值还是一个函数
//第一个参数是映射store的数据到props，第二个是触发dispatch，第二个参数可以不传
export default connect(stateToProps, dispatchToProps)(TodoList);