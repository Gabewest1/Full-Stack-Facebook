import styled from "styled-components";
import Input from "components/Input";

module.exports = styled(Input)`
    box-sizing: content-box;
    width: 142px;
    height: 14px;
    margin: 4px 0;
    padding: 3px 4px;

    @media (max-width: 440px) {
        width: 108px;
    }
`