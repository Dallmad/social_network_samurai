import {authAPI, LoginParamsType} from '../api/api';
import {Dispatch} from 'redux';
import {handleServerAppError, handleServerNetworkError} from '../utils/error-utils';
import {setAppStatusAC} from './app-reducer';

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
| ReturnType<typeof toggleIsFetching> | ReturnType<typeof setIsAuth>

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
        case 'SET-IS-AUTH':
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}
const setAuthUserData = (id:number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id,login,email}
}) as const
const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching}) as const
export const setIsAuth = (isAuth: boolean) =>
    ({type: 'SET-IS-AUTH', isAuth} as const)

//thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.me()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(toggleIsFetching(false))
                    let {id, login, email} = res.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            }
        )
}
export const login = (data: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(true))
                dispatch(setAppStatusAC('succeeded'))
            } else {handleServerAppError(res.data, dispatch)}
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch);
        })
}
export const logout = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(false))
                dispatch(setAppStatusAC('succeeded'))
                //dispatch(clearTodosDataAC())
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
