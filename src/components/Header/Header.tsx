import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {FC} from 'react';
import {AuthDataType} from '../../redux/auth-raducer';

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

    return <header className={s.header}>

        <img src="https://gazacademy.ru/wp-content/uploads/2019/04/loading-gears-animation-3.gif"/>
        <div className={s.loginBlock}>
            {isAuth ? <div>{data.login}</div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}