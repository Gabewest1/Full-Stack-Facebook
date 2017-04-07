import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "file-loader!./Logo.png";
import Button from "./Button";
import Input from "./Input";
import A from "components/A";

export default function() {
    return (
        <Header>
            <Wrapper>
                <FacebookLogo src={Logo} alt="facebook logo"/>
                <Form>
                    <InputContainer top>
                        <Label htmlFor="user">Email or Phone</Label>
                        <Input name="user"/>                       
                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password"/>
                        <Label faded><A href="#">Forgot account?</A></Label>
                    </InputContainer>
                    <Link to="/home"><Button>Log In</Button></Link>
                </Form>
            </Wrapper>
        </Header>
    )
}
const Header = styled.header`
    background-color: #3b5998;
    height: 82px;
    font-family: Helvetica;
    color: white;

    @media (max-width: 668px) {
        height: 110px;
        padding: 15px 0;
    }
`
const Wrapper = styled.div`
    max-width: 960px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 668px) {
        flex-direction: column;
    }
`
const Form = styled.form`
    margin: 0;
    display: flex;
    align-items: center;

    @media (max-width: 668px) {
        border-top: white solid 2px;
        padding-top: 10px;
    }
`
const FacebookLogo = styled.img`
    width: 170px;
    height: 36px;
`
const InputContainer = styled.div`
    align-self: ${props => props.top ? "flex-start" : ""};
    margin-right:15px;
`
const Label = styled.label`
    color: ${props => props.faded ? "#9cb4d8" : "white"};
    font-size: 12px;
    display:block;
`