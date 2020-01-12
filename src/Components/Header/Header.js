import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Logo } from "../Icons";

const Container = styled.header`
    z-index:10;
    display:flex;
    align-items: center;
    position: fixed;
    left:0;
    top:0;
    background-color: ${props => props.theme.darkGreenColor};
    padding: 10px 95px;
    height:110px;
    width:100%;
`;

const CategoryBox = styled.div`
    display:inherit;
    align-items: center;

`;

const Category = styled.div`
    font-size:16px;
    padding: 10px 0 ;
    font-weight: 600;
    color: #FFFFFF;
    margin-right: 30px;
`

const Header = () =>
    <Container>
        <CategoryBox>
            <Link to={`/`}>
                <Category>
                    영화
            </Category>
            </Link>
            <Link to={`/drama`}>
                <Category>
                    TV프로그램
            </Category>
            </Link>
            <Link to={`/drama`}>
                <Category>
                    인물
            </Category>
            </Link>
        </CategoryBox>
    </Container>


export default Header;