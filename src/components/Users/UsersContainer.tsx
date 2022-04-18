import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    UserType, toggleIsFollowingProgress, getUsers, follow, unfollow
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPagesChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)

    /*    this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize)
        .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            }
        )*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPagesChanged={this.onPagesChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (userId: number,isFetching: boolean) => void
    getUsers:(currentPage: number, pageSize: number) => void

}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers
})(UsersContainer)