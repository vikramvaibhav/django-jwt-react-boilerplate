import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {
    Container,
    Image,
    Menu,
    Button,

} from 'semantic-ui-react'
import { logout } from '../redux'
const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Menu fixed='top' inverted>
            <Container>
                <Link to={'/'}>
                    <Menu.Item header>
                        <Image size='mini' src='static/media/logo/logo.png' style={{ marginRight: '1.5em' }} />
                        Project Name
                </Menu.Item>
                </Link>
                <Menu.Item><Link to={'/'}>Home</Link></Menu.Item>

                {userInfo ? (
                    <Menu.Item position='right'>
                        <Button inverted onClick={logoutHandler}>Logout</Button>
                    </Menu.Item>
                ) : (<>
                    <Menu.Item position='right'>
                        <Link to={'/login'}>
                            <Button inverted>Log in</Button>
                        </Link>
                        <Link to={'/register'}>
                            <Button inverted style={{ marginLeft: '0.5em' }}>
                                Register
                            </Button>
                        </Link>
                    </Menu.Item>
                </>)}
            </Container>
        </Menu >
    )
}

export default Header
