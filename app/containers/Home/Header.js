import React from "react";
import Link from "components/Link";
import styled from "styled-components";
import Logo from "file-loader!./Logo.jpeg"
import ProfilePic from "file-loader!assets/ProfilePicture.jpg";
import Divider from "components/Divider";


const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-grow: ${props => props.grow ? 1 : 0};
    position: relative;
    width: 100%
    max-width: 446px;
`
const Input = styled.input`
    height: 28px;
    width: 100%;
    font-size: 16px;
    border-radius: 1px;
    border-style: none;
    padding: 0 10px;
`
const Wrapper = styled.div`
    max-width: 1024px;
    display: flex;
    flex-grow:1;
    position: relative;
    padding: 0 15px;
    margin-left: 75px;
`
const Header = styled.header`
    background-color: #3b5998;
    height: 42px;
    display: flex;
    align-items: center;
    // justify-content: center;
`
const LeftSection = styled.section`
    height: 28px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-right: 45px;
`
const RightSection = styled.section`
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Button = styled.button`
    width: 27px;
    height: 27px;
`
const DropdownArrow = styled.div`
    width: 16px;
    height: 16px;
    background-color: #000099;
`
const FacebookLogo = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 3px;
    margin-right: 7px;
`
const ProfilePicture = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 8px;
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
export default function(props) {
    return(
        <Header>
            <Wrapper>
                <LeftSection>
                    <Link to="/">
                        <FacebookLogo src={Logo} alt="Facebook logo"/>
                    </Link>
                    <InputContainer>
                        <Input placeholder="Search Facebook" />
                        <SearchIcon bg="rgb(246, 247, 249)">
                            <i className="icon search"></i>
                        </SearchIcon>
                    </InputContainer>
                </LeftSection>
                <RightSection>
                    <Link to="/user/profile">
                        <ProfilePicture src={ProfilePic} alt="profile picture" />
                        Gabe
                    </Link>

                    <Divider></Divider>

                    <Link to="/">
                        Home
                    </Link>

                    <Divider></Divider>

                    <NotificationIcons>
                        <Icon>
                            <i className="icon group"></i>
                        </Icon>
                        <Icon>
                            <i className="icon discussions"></i>
                        </Icon>
                        <Icon>
                            <i className="icon world"></i>
                        </Icon>
                    </NotificationIcons>

                    <Divider></Divider>

                    <SettingsIcon>
                        <i className="icon settings"></i>
                        <i className="icon chevron down"></i>
                    </SettingsIcon>
                </RightSection>
            </Wrapper>
        </Header>
    )
}