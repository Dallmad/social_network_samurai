import React from 'react';
import {changeNewMessageBodyCallback, DialogsPageType, sendMessageCallback} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType ): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody: changeNewMessageBodyCallback,
    sendMessage:sendMessageCallback
})(Dialogs)
