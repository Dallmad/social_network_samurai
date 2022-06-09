import s from './Dialogs.module.css';
import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {useFormik} from 'formik';
import {Button, FormGroup, TextField} from '@mui/material';
import {login} from '../../redux/auth-raducer';
import {useDispatch} from 'react-redux';
import {changeNewMessageBodyCallback} from '../../redux/dialogs-reducer';

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messageElements = props.dialogsPage.messages.map(m =>
        <Message id={m.id} message={m.message} key={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageForm
                    newMessageBody={props.dialogsPage.newMessageBody}
                    onSendMessageClick={props.sendMessage}
                    onNewMessageChange={props.updateNewMessageBody}
                />
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {

    const dispatch = useDispatch()
    const formik = useFormik
    ({
        initialValues: {
            newMessageBody: ''
        },
        onSubmit: values => {
            dispatch(onSendMessageClick)
            console.log('333:' + newMessageBody)
            /* onSendMessageClick()
             onNewMessageChange(values as any)*/
            //dispatch(login(values))
            formik.resetForm()
        },
    })

    const newMessageBody = props.newMessageBody
    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }

    return (
        <form onSubmit={formik.handleSubmit}>

                <TextField
                    margin="normal"
                    placeholder="Enter your message"
                    {...formik.getFieldProps('newMessageBody')}
                />


                {/*<textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"/>*/}
                <div>
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                    >
                        Send
                    </Button>
                </div>

        </form>
    )
}

type AddMessageFormPropsType = {
    newMessageBody: any
    onSendMessageClick: any
    onNewMessageChange: any
}
type FormikErrorType = {
    newMessageBody?: string
}