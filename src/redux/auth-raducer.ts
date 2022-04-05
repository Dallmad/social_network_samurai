const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type AuthDataType = {
    id: number
    login: string
    email: string
}

export type AuthType = {
    data: AuthDataType
    resultCode: number
    messages: string[]
    isAuth: boolean
    isFetching: boolean
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData>
| ReturnType<typeof toggleIsFetching>

let initialState = {
    data: {id: 0, login: '',email: ''},
    resultCode: 0,
    messages: [],
    isAuth: false,
    isFetching: false
}

export const authReducer = (state: AuthType = initialState,
                            action: AuthActionTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data:action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}
export const setAuthUserData = (id:number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id,login,email}
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching}) as const
