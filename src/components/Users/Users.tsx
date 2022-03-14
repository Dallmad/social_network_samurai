import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css'
import userPhoto from '../../assets/images/img.png'
import axios from 'axios';
import {setTotalUsersCountAC} from '../../redux/users-reducer';


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPagesChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : ''} onClick={() => {this.onPagesChanged(p)}}>{p}</span>
                    })
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button
                                    onClick={() => {
                                        this.props.follow(u.id)
                                    }}
                                >Follow</button>
                                : <button
                                    onClick={() => {
                                        this.props.unfollow(u.id)
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
}
