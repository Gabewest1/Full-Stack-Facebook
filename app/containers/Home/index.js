import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Post from "components/Post";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Home extends React.Component {
    render() {
        const posts = createPosts();
        return (
            <Container>
                <Header />
                {posts}
            </Container>
        )
    }
}

function createPosts(num) {
    let posts = [];
    let names = ["Jerry Rigs", "Marshall Grant", "Jacob West", "Michael Spencer", "Nick Richarte", "Henry Lone"];
    let usedName = [];

    for(var i=0; i<num || i<6; i++) {
        let name = names[i];
        let post = (
            <Post key={i} user={name} content={"wath happan"}/>
        )
        posts.push(post);
    }

    return posts;
}
