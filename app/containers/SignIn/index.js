import React from "react";
import styled from "styled-components";
import Header from "components/Header";

const icon1 = "https://scontent-dft4-2.xx.fbcdn.net/v/t39.2365-6/851565_602269956474188_918638970_n.png?oh=894e994a5ae3ec3434da54fe42e31e72&oe=5971E6F5";
const icon2 = "https://scontent-dft4-2.xx.fbcdn.net/v/t39.2365-6/851585_216271631855613_2121533625_n.png?oh=d57a82b1b4345fdcf2d9c0debf783dc0&oe=5950DE20";
const icon3 = "https://scontent-dft4-2.xx.fbcdn.net/v/t39.2365-6/851558_160351450817973_1678868765_n.png?oh=8de3304d724a879592bcc3fe9f967dcd&oe=5959B4D8";

export default class SignIn extends React.Component {
    render() {
        return(
            <Container>
                <Header />
                <Main>
                    <Wrapper>
                        <LeftSection>
                            <H2>Connect with friends and the world around you on Facebook</H2>
                            <Icons>
                                <Icon>
                                    <IconImg src={icon1}></IconImg>
                                    <IconText>
                                        <Span>See phtos and updates</Span> from friends in News Feed.
                                    </IconText>
                                </Icon>
                                <Icon>
                                    <IconImg src={icon2}></IconImg>
                                    <IconText>
                                        <Span>Share what's new</Span> in your life on your Timeline.
                                    </IconText>
                                </Icon>
                                <Icon>
                                    <IconImg src={icon3}></IconImg>
                                    <IconText>
                                        <Span>Find more </Span> of what you're looking for with Facebook Search.                            
                                    </IconText>
                                </Icon>
                            </Icons>
                        </LeftSection>
                        <RightSection>
                            <H1>Sign Up</H1>
                            <H3>It's free and always will be</H3>
                            <Form>
                                <InputContainer>
                                    <Input placeholder="First name" />
                                    <Input placeholder="Last name" />
                                </InputContainer>
                                <InputContainer>
                                    <Input placeholder="Mobile number or email" />
                                </InputContainer>
                                <InputContainer>
                                    <Input placeholder="New password" />
                                </InputContainer>
                                <SelectContainer>
                                    <BirthdayHeading>Birthday</BirthdayHeading>
                                    <div>
                                        <Select></Select>
                                        <Select></Select>
                                        <Select></Select>
                                        <A href="#">why do i need to provide my birthday?</A>
                                    </div>
                                </SelectContainer>
                                <RadioContainer>
                                    <Input type="radio" />Female
                                    <Input type="radio" />Male
                                </RadioContainer>
                            </Form>
                        </RightSection>
                    </Wrapper>
                </Main>
            </Container>
        )
    }
}

const Container = styled.div`
    background-color: #edf0f5;
    height: 100%;
`
const Main = styled.main`
    
`
const Wrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
const LeftSection = styled.section`
    display: flex;
    flex-direction: column;
`
const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 100px;
`
const InputContainer = styled.div`
    align-self: ${props => props.top ? "flex-start" : ""};
    display: flex;
`
const SelectContainer = styled.div`

`
const RadioContainer = styled.div`

`
const Form = styled.form`

`
const H1 = styled.h1`
    font-size: 36px;
    margin: 0;
    margin-top: 15px;
`
const H2 = styled.h2`
    font-size: 28px;
    width: 450px;
`
const H3 = styled.h3`
    font-size: 20px;
    margin: 5px 0 10px 0;
`
const BirthdayHeading = styled(H3)`
    margin: 10px 0;
`
const Input = styled.input`
    border-radius: 5px;
    padding: 10px 8px;
    font-family: inherit;
    flex-grow: 1;
` 
const Select = styled.select`

`
const A = styled.a`

`
const Icons = styled.ul`
    padding: 0;
    list-style: none;
`
const Icon = styled.li`
    display: flex;
    margin-bottom: 20px;
    color: #666;
    max-width: 500px;
`
const IconText = styled.div`
    font-size: 15px;
    padding-left: 15px;
`
const IconImg = styled.img`

`
const Span = styled.span`
    color: black;
    font-weight: bold;
    margin-right: 7px;
`


