import s from './users.module.css';
import userPhoto from '../../assets/images/img.png';
import React, {useEffect, useState} from 'react';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {PaginationFC} from '../common/pagination/Pagination';

type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPagesChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}


export const Users: React.FC<UsersFCPropsType> = (props) => {

/*    const [follow, setFollow] = useState(false)

    const onClickUnfollow = (uId: number) => {
        props.unfollow(uId)
        setFollow(false)
    }
    const onClickFollow = (uId: number) => {
        props.follow(uId)
        setFollow(false)
    }*/
    return (
        <div>
            <PaginationFC onPagesChanged={props.onPagesChanged}/>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                                </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.unfollow(u.id)}
                                >Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => props.follow(u.id)}
                                >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        {/*          <span>
                            <div>
                                {'country'}
                            </div>
                            <div>
                                {'city'}
                            </div>
                         </span>*/}
                    </span>
                </div>)
            }
        </div>
    );
}




