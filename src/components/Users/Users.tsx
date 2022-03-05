import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css'

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyyVmxudAz9oz04mTAe4jJ-BJZtByh3oC2Q&usqp=CAU',
                    followed: false,
                    fullName: 'Dzmitry',
                    status: 'I am a shark',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyyVmxudAz9oz04mTAe4jJ-BJZtByh3oC2Q&usqp=CAU',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a big shark',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyyVmxudAz9oz04mTAe4jJ-BJZtByh3oC2Q&usqp=CAU',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a small shark',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
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
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                         </span>
                    </span>
                </div>)
            }
        </div>
    );
}
