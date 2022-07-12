import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {getAuthUserData, setIsAuth} from './auth-raducer';
import {handleServerAppError, handleServerNetworkError} from '../utils/error-utils';


const APP_SET_STATUS = 'APP/SET-STATUS'
const APP_SET_ERROR = 'APP/SET-ERROR'
const APP_SET_INITIALIZED = 'APP/SET-IS-INITIALIZED'

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case APP_SET_STATUS:
            return {...state, status: action.status}
        case APP_SET_ERROR:
            return {...state, error: action.error}
        case APP_SET_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}

//action creators
export const setAppErrorAC = (error: string | null) => ({type: APP_SET_ERROR, error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: APP_SET_STATUS, status} as const)
export const setIsInitializedAC = (isInitialized: boolean) => ({type: APP_SET_INITIALIZED, isInitialized} as const)

//thunks
export const initializeAppTC = () => (dispatch: Dispatch) => {
    let promise = dispatch(getAuthUserData() as any)
    promise.then(() => {
        dispatch(setIsInitializedAC(true))
    })
}
//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetIsInitializedActionType = ReturnType<typeof setIsInitializedAC>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetIsInitializedActionType
