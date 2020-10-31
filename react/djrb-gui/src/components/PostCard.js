import React from 'react'
import { Image, Card, Container, Header } from 'semantic-ui-react'
const PostCard = ({ post }) => {
    return (
        <>
            {post ? (<Card fluid>
                <Image src={post.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Description>{post.excerpt.substring(0, 150) + '. . .'}</Card.Description>
                </Card.Content>
            </Card >
            ) : (
                    <Container style={{ marginTop: '7em' }} >
                        <Header as='h1'>No posts here!.</Header>
                        <p>This is a basic fixed menu template using fixed size containers.</p>
                        <p>
                            A text container is used for the main container, which is useful for single column layouts.
        </p>
                    </Container >)}
        </>
    )
}

export default PostCard
