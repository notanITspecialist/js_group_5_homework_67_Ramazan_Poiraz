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
            return {...state, eval: '' }
        }
    }
    if(action.type === 'ADD-SYMBOL'){
        const lastSymbol = state.eval[state.eval.length - 1]
        if(action.symbol === '+' || action.symbol === '-' || action.symbol === '/' || action.symbol === '*'){
            if(lastSymbol !== '+' && lastSymbol !== '-' && lastSymbol !== '/' && lastSymbol !== '*'){
                return {...state, eval: state.eval + action.symbol}
            } else {
                let newOperator = state.eval;
                newOperator = newOperator.substring(0,newOperator.length -1);
                return {...state, eval: newOperator + action.symbol}
            }
        } else {
            return {...state, eval: state.eval + action.symbol}
        }
    }
    if(action.type === 'DELETE-SYMBOL'){
        return {...state, eval: state.eval.substring(0, state.eval.length - 1)}
    }
    return state;
};

export default reducer;