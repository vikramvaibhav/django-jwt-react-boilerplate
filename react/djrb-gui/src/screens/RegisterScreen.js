import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Form, Grid, Header, Image, Message, Loader, Segment } from 'semantic-ui-react'

import { register } from '../redux'

const RegisterScreen = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/login'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        var register_data = {
            email, username, password
        }
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(register_data))
        }
    }

    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='static/media/logo/logo.png' /> Create a new account
                    </Header>
                    {message && <Message negative>{message}</Message>}
                    {error && <Message negative>{error}</Message>}
                    {loading && <Loader active inline='centered' />}
                    <Form size='large' onSubmit={submitHandler}>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='mail'
                                iconPosition='left'
                                placeholder='E-mail address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirm password'
                                type='password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <Button type='submit' color='teal' fluid size='large'>
                                Register
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Have an Account?
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default RegisterScreen
