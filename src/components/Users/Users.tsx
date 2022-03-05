import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png'

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        }
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                >
                                    Follow</button>
                                : <button
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >Unfollow</button>}
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
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                         </span>
                    </span>
                </div>)
            }
        </div>
    );
}
