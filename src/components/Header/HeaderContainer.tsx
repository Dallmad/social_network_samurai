import React from 'react';
import {Header} from './Header';
import {AuthDataType, setAuthUserData, toggleIsFetching} from '../../redux/auth-raducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import {Preloader} from '../common/preloader/Preloader';



class HeaderContainer extends React.Component<AuthPropsType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(false)
                    let {id,login,email} = response.data.data
                    this.props.setUserData(id,login,email)
                }
            }
        )
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
    setUserData: (id:number, login: string, email: string) => void
    toggleIsFetching: (isFetching: boolean) => void
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

export default connect(mapStateToProps, {setUserData: setAuthUserData, toggleIsFetching})(HeaderContainer)