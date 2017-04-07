import React from "react";
import styled from "styled-components";

const Icon = styled`

`
const Icon = styled.div`
    background-color: ${props => props.bg ? props.bg : ""};
    font-size: 22px;
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 100%;

    &:hover {
        background-color: #4267b2;
    }
    > .icon {
        margin: 0;
        
    }
`
const SearchIcon = styled(Icon)`
    font-size: 14px
    color: gray;
    height: 100%;
    padding: 0 12px;
    position:absolute;
    right: 0px;

    &:hover {
        background-color: rgb(227, 228, 230);
    }
`
const SettingsIcon = styled(Icon)`
    > .chevron {
        font-size: 12px;
        align-self: flex-start;
    }
`
const NotificationIcons =styled.div`
    display: flex;
    > * {
        padding: 0 5px;
    }
    > *:first-child {
        padding-left: 0;
    }
    > *:last-child {
        padding-right: 0;
    }
`