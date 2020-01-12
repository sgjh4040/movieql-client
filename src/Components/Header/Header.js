import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    background-color: #FFFFFF;
    color: #333333;
    

`
const Category = styled.div`
    font-size:15px;
    padding: 10px 0 ;
    font-weight: 600;
`

const Header = () =>
    <Container>
        <Link to={`/`}>
            <Category>
                영화
            </Category>
        </Link>
        <Link to={`/drama`}>
            <Category>
                드라마
            </Category>
        </Link>
        <Link to={`/drama`}>
            <Category>
                추천
            </Category>
        </Link>
    </Container>


export default Header;