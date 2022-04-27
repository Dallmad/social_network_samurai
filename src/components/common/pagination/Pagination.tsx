import s from '../../Users/users.module.css';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {UserType} from '../../../redux/users-reducer';
import {Stack} from '@mui/material';
import Pagination from '@mui/material/Pagination';

export const PaginationFC = (props: PaginationType) => {

    const usersPage = useSelector<AppStateType, usersPageType>(state => state.usersPage)

    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)
    /*let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }*/
    /*let x = pages.map((p) => {
        return p
    })*/
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        props.onPagesChanged(value)
    };
    return (
        <div>
            <Stack>
                <Pagination
                    count={pagesCount}
                    showFirstButton
                    showLastButton
                    page={page}
                    onChange={handleChange}
                    size="large"
                    color="primary"
                    boundaryCount={2}
                    siblingCount={2}
                />

            </Stack>


            {/*{pages.map((p, i) => {
                return <span key={p + '-' + i} className={usersPage.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPagesChanged(p)
                             }}>{p}</span>
            })
            }*/}
        </div>
    )
}
type PaginationType = {
    onPagesChanged: (pageNumber: number) => void
}

type usersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
