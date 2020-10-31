import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Segment, Loader, Image, Header, Divider, Dimmer, Grid } from 'semantic-ui-react'
import PostCard from '../components/PostCard'
import { listPosts } from '../redux'
const HomeScreen = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const postList = useSelector((state) => state.postList)
    const { loading, error, posts } = postList

    useEffect(() => {
        dispatch(listPosts())
    }, [dispatch])

    return (
        <Container style={{ marginTop: '7em' }}>
            {loading &&
                <Segment>
                    <Dimmer active inverted>
                        <Loader size='medium'>Loading</Loader>
                    </Dimmer>
                    <Image src='static/media/images/paragraph.png' />
                </Segment>
            }

            {!userInfo ? (
                <Segment color='teal' secondary inverted style={{ marginTop: '7em' }}>
                    <Header as='h2' floated='right'>
                        Login to view posts.
                    </Header>

                    <Divider clearing />
                    <p>Posts are protected and can be viewed after login.</p>
                    <p>
                        A text container is used for the main container, which is useful for single column layouts.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                    </p>
                </Segment>
            ) : error && (
                <Segment color='red' secondary inverted style={{ marginTop: '7em' }}>
                    <Header as='h2' floated='right'>
                        Sorry, something went wrong. Please try again later.
                    </Header>

                    <Divider clearing />
                    <p>
                        A text container is used for the main container, which is useful for single column layouts.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                    </p>
                </Segment>
            )
            }
            <Grid columns='equal'>

                {posts && posts.map(post => (
                    <Grid.Column key={post.id} width={5}>
                        <PostCard post={post} />
                    </Grid.Column>)
                )}
            </Grid>

        </Container>
    )
}

export default HomeScreen
