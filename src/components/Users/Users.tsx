import s from './users.module.css';
import userPhoto from '../../assets/images/img.png';
import React from 'react';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


type UsersFCPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPagesChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (userId: number,isFetching: boolean) => void
    followingInProgress: number[]
}


export const Users: React.FC<UsersFCPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, i) => {
                    return <span key={p + '-' + i} className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPagesChanged(p)
                                 }}>{p}</span>
                })
                }
            </div>
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
                                <button disabled={props.followingInProgress.some(id => id===u.id)}
                                    onClick={() => {
                                        props.toggleIsFollowingProgress(u.id,true)
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'efb8825f-df2b-4d2c-b6cc-3340575a86da'
                                            }
                                        })
                                            .then(response => {
                                                    if (response.data.resultCode === 0) {props.unfollow(u.id)}
                                                props.toggleIsFollowingProgress(u.id,false)
                                                }
                                            )
                                    }
                                    }
                                >Unfollow</button>
                                :<button disabled={props.followingInProgress.some(id => id===u.id)}
                                    onClick={() => {
                                        props.toggleIsFollowingProgress(u.id,true)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'efb8825f-df2b-4d2c-b6cc-3340575a86da'
                                            }
                                        })
                                            .then(response => {
                                                    if (response.data.resultCode === 0) {props.follow(u.id)}
                                                props.toggleIsFollowingProgress(u.id,false)
                                                }
                                            )
                                    }
                                    }
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