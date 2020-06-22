import api from "./api";

//Actions should create as a "Object"
export const ACTION_TYPES = {
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

//Action Creator Function (Redux thunk wraper function)
export const fetchAll = () => {
    return dispatch => {
        //1.get api request 
        //2.call dispatch fuction.The implementation of this function inside the redux.
        api.dCandidate().fetchAll()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(err => console.log(err))
        
    }
}