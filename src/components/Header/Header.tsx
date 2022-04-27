import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {FC} from 'react';
import {AuthDataType, logout} from '../../redux/auth-raducer';
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';

type HeaderPropsType = {
    data: AuthDataType
    isAuth: boolean
    isFetching: boolean
}

export const Header: FC<HeaderPropsType> = ({
                                                data,
                                                isAuth,
                                                isFetching,
                                                ...restprops
                                            }) => {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }

    return <header className={s.header}>

        <img src="https://gazacademy.ru/wp-content/uploads/2019/04/loading-gears-animation-3.gif"/>
        <div className={s.loginBlock}>
            {isAuth ? <Button color="inherit" onClick={logoutHandler}>Logout</Button>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}