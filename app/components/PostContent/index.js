import React from "react";
import styled from "styled-components";

export default function(posts) {
    return(
        <Wrapper>
            <PostText>
                This is a post about how i went into mcdonalds to order a mcdouble when
                out of nowhere sean brown busted in with mcnugets of deliciousness and we ate
                those hoes like a priest on haunaka
            </PostText>
        </Wrapper>
    )
}
const PostText = styled.p`

`
const Wrapper = styled.div`
    padding:5px;
`