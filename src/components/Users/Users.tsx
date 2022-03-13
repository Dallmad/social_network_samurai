import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css'
import userPhoto from '../../assets/images/avatar.png'
import axios from 'axios';


export class Users extends React.Component<UsersPropsType>{

constructor(props:UsersPropsType) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        }
    )
}


    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos!=null ? u.photos: userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button
                                    onClick={() => {this.props.follow(u.id)}}
                                >Follow</button>
                                : <button
                                    onClick={() => {this.props.unfollow(u.id)}}
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
}
