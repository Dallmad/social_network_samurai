import React from 'react';
import {Header} from './Header';
import {AuthDataType, getAuthUserData} from '../../redux/auth-raducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Preloader} from '../common/preloader/Preloader';

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

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
type MapDispatchPropsType = {
    getAuthUserData: () => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.auth.data,
        resultCode: state.auth.resultCode,
        messages: state.auth.messages,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {
    getAuthUserData
})(HeaderContainer)