import {combineReducers, createStore} from "redux";
import {ProfileActionsTypes, ProfilePageType, profileReducer} from "./ProfileReducer";
import {DialogsActionsTypes, DialogsPageType, dialogsReducer} from "./DialogsReducer";
import {sidebarReducer, SidebarType} from "./SidebarReducer";

type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type ActionsTypes = ProfileActionsTypes|DialogsActionsTypes

export type StoreType = {
    _state: stateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer
})

export let store:StoreType = createStore(reducers)