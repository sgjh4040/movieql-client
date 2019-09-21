import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    background-color: #0074D9;
    color: white;
    

`
const Category = styled.div`
    font-size:30px;
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