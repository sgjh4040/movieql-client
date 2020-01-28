import React from "react";
import styled from "styled-components";
import { Link,withRouter } from "react-router-dom";
import useInput from "../../Hooks/useInput";
// import { Logo } from "../Icons";
import logo from "../../assets/icons/logo.png";


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
    padding: 10px;
    height:60px;
    width:100%;
    @media (min-width: 576px){
        padding: 10px 95px;
        height:110px;
    }
`;
const Logo = styled.img`
    width:80px;
    height: 80px;
    margin-right:20px;
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

const Header = withRouter(({history}) =>{
    const search = useInput('');

    const onKeyPress = async event =>{
        const { which } = event;
        if(which === 13){
            event.preventDefault();
            try{
                console.log(search.value);
                history.push(`/search?term=${search.value}`);
            }catch{

            }finally{
                search.setValue('');
            }
        }
    }


    return (
        <HeaderBox>
        <Container>
            <Logo src={logo}/>
            <CategoryBox>
                <Link to={`/`}>
                    <Category>
                        영화
            </Category>
                </Link>
                <Link to={`/tv`}>
                    <Category>
                        TV프로그램
            </Category>
                </Link>
                <Link to={`/person`}>
                    <Category>
                        인물
            </Category>
                </Link>
            </CategoryBox>
        </Container>
        <SearchBox>
            <SearchInput placeholder={'영화, TV 프로그램, 인물 검색'} {...search} onKeyPress={onKeyPress}/>
        </SearchBox>
    </HeaderBox>
    )
})
    


export default Header;