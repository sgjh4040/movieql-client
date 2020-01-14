import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Logo } from "../Icons";


const HeaderBox = styled.header`
    z-index:10;
    width:100%;
    position: fixed;
    left:0;
    top:0;
`;

const Container = styled.div`
   
    display:flex;
    align-items: center;
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
`;
const SearchBox = styled.div`
    width:100%;
    height: 50px;

`;
const SearchInput = styled.input`
    border-radius: 0;
    padding: 0 30px;
    height: 46px;
    box-sizing: border-box;
    border: none !important;
    width: 100%;
    line-height: 1.2em;
    color: #acacac;
    font-size: 1rem;

`;

const Header = () =>
    <HeaderBox>
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
        <SearchBox>
            <SearchInput placeholder={'영화, TV 프로그램, 인물 검색'}/>
        </SearchBox>
    </HeaderBox>


export default Header;