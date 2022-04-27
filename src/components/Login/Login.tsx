import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import { Navigate } from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@mui/material';
import s from './Login.module.css'
import {login} from '../../redux/auth-raducer';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const LoginPage = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 3) {
                errors.password = 'Password should be more 3 symbols';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm()
        },
    })

    if (isAuth) {
        return <Navigate to='/profile'/>
    }
    return <Grid container justifyContent={'center'} >
        <Grid item justifyContent={'center'}>
            <FormControl>

                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>

                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email
                            && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password
                            && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                        <FormControlLabel className={s.components}
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}
                            />}
                        />
                        <Button
                            type={'submit'}
                            variant={'contained'}
                            color={'primary'}
                        >
                            Login
                        </Button>
                    </FormGroup>
                </form>

            </FormControl>
        </Grid>
    </Grid>
}
