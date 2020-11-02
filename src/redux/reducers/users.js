import { SET_USER_INFO } from '../types/index'

const initialState = {
    info: { name: 'bossMjay' }
}
const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                info: {
                    ...state.info,
                    ...action.payload
                }
            }
        default: return state
    }
}

export default usersReducer