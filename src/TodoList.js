import React, { Component } from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
    let { inputValue, inputChange, clickButton, list } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

// class TodoList extends Component {
//     render() {
//         let { inputValue, inputChange, clickButton, list } = this.props
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={inputChange} />
//                     <button onClick={clickButton}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return (<li key={index}>{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

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