const initialState = {
    eval: ''
};

const reducer = (state = initialState, action) => {
    if(action.type === 'EVAL'){
        return {...state, eval: action.eval}
    }
    if(action.type === 'GET-TOTAL'){
        try {
            return {...state, eval: eval(state.eval).toString() }
        } catch (e) {
            return {...state, eval: 'ERROR' }
        }
    }
    if(action.type === 'ADD-SYMBOL'){
        return {...state, eval: state.eval + action.symbol}
    }
    if(action.type === 'DELETE-SYMBOL'){
        return {...state, eval: state.eval.substring(0, state.eval.length - 1)}
    }
    return state;
};

export default reducer;