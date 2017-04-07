import React from "react";
import styled from "styled-components";
import Link from "components/Link";
import H3 from "components/H3";
import PostContent from "components/PostContent";
import ProfilePic from "file-loader!assets/ProfilePicture.jpg";

export default function(props) {
    return(
        <Post>
            <PostHeading>
                <Link to="/user/profile"><ProfilePicture src={ProfilePic} alt="profile picture"/></Link>
                <H3>
                    <Link to="/user/profile">{props.user}</Link>
                    shared something
                </H3>
                <Timestamp>March 24 at 1:26pm</Timestamp>
            </PostHeading>
            <PostContent content={props.content} />

        </Post>
    )
}

const Post = styled.div`
    width: 500px;
`
const PostHeading = styled.div`

`
const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
`
const Timestamp = styled.h1`
    color: gray;
    font-size: 12px;
`