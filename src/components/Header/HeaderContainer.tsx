import React from 'react';
import {Header} from './Header';
import {AuthDataType} from '../../redux/auth-raducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Preloader} from '../common/preloader/Preloader';

class HeaderContainer extends React.Component<AuthPropsType> {


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props}
            />
        </>
    }
}

type MapStatePropsType = {
    data: AuthDataType
    resultCode: number
    messages: string[]
    isAuth: boolean
    isFetching: boolean
}

export type AuthPropsType = MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.auth.data,
        resultCode: state.auth.resultCode,
        messages: state.auth.messages,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps)(HeaderContainer)