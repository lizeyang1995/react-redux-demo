const defaultState = {
    inputValue: 'lzy',
    list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if (action.type === "change_input") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}