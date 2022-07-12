import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {FC} from 'react';
import {AuthDataType, logout} from '../../redux/auth-raducer';
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import gif from '../../assets/images/loading-gears.gif'

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

        <img src={gif}/>
        <div className={s.loginBlock}>
            {isAuth ?
                <div>
                    Hello,{data.login}!
                    <Button color="inherit" style={{marginLeft: 50}} onClick={logoutHandler}>Logout</Button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}