import React, { useState } from "react";
import { useQuery } from 'react-apollo-hooks';
import styled from "styled-components";
import queryString from 'query-string';
import { Link } from "react-router-dom";
import { SEARCH } from "../../queries";
import Loader from "../../Components/loader";
import Movie from "../../Components/Movie";
import avatar from "../../assets/icons/avatar.png";

const FlexBox = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 576px){
        flex-direction: row;
    }
    @media (min-width: 768px){
        flex-direction: row;
    }
`;

const Nav = styled.nav`
    display:inherit;
    flex-direction: column;
    background-color:#F0F0F0;
    width:100%;
    margin-left: 1%;
    height:100%;
    @media (min-width: 576px){
        width:30%;
        margin-left: 2%;
    }
    @media (min-width: 768px){
        width:30%;
        margin-left: 5%;
    }
`;
const NavListBox = styled.ul`
    width:100%;
    border-top: 2px solid #000;
    .activate{
        border-bottom: 2px solid #00d573;
    }
`;
const NavList = styled.li`
    line-height: 1.4em;
    color: #000;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 600;
    padding: 12px 0;
    &:active{
        border-bottom: 2px solid #00d573;
    }
`;
const ContentColumn = styled.div`
    display:inherit;
    flex-direction: column;
    width:100%;
    margin-right: 50px;
    margin-top:50px;
    @media (min-width: 576px){
        margin-top:0;
        width:70%;
        margin-left: 2%;
    }
    @media (min-width: 768px){
        width:70%;
        margin-left: 5%;
    }

`;
const Label = styled.div`
    font-size: 1.3rem;
    margin-bottom:10px;
    font-weight:700;
    @media (min-width: 576px){
        font-size: 1.4rem;
    }
`;
const ContentList = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const PersonBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color:#000;
    margin-bottom: 10px;
    .title{
        font-size:1.3em;
    }
`;
const PersonImg = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 4px;
    margin-right: 10px;
`;

const Search = ({ location }) => {
    const query = queryString.parse(location.search);
    const [language, setLanguage] = useState('ko-kr');
    const [select, setSelect] = useState('person');
    const { data, loading, error } = useQuery(SEARCH, {
        variables: {
            term: query.term,
            language
        }
    })
    if (loading) return <Loader />;
    if (error) return "error";
    console.log(data);

    const changeSelect = (select) => {
        setSelect(select);
    }


    const getContent = () => {
        if (select === 'person') {
            if(data.searchPeoples.length ===0){
                return <div>검색 결과가 없습니다.</div>
            }
            return (
                data.searchPeoples.map(person => (
                    <Link to={`/person/${person.id}`}>
                    <PersonBox>
                        <PersonImg src={person.profile_path ? `https://image.tmdb.org/t/p/w90_and_h90_face${person.profile_path}`
                        :avatar
                        } />
                        <div className="title">
                            {person.name}
                        </div>
                    </PersonBox>
                    </Link>
                ))
            )
        } else if (select === 'movie') {
            if(data.searchMovies.length ===0){
                return <div>검색 결과가 없습니다.</div>
            }
            return (
                data.searchMovies.map((movie, index) => (
                    <Movie
                        width="100%"
                        from="movie"
                        key={index}
                        index
                        id={movie.id}
                        poster={movie.poster_path}
                        overview={movie.overview}
                        title={movie.title}
                        rating={movie.vote_average}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                    />
                ))
            )
        } else if (select === 'tv') {
            if(data.searchTvs.length ===0){
                return <div>검색 결과가 없습니다.</div>
            }
            return (
                data.searchTvs.map((tv, index) => (
                    <Movie
                        from="tv"
                        width="100%"
                        key={index}
                        index
                        id={tv.id}
                        poster={tv.poster_path}
                        overview={tv.overview}
                        title={tv.name}
                        rating={tv.vote_average}
                        vote_average={tv.vote_average}
                        release_date={tv.first_air_date}
                    />
                ))
            )
        }
    }


    return (
        <FlexBox>
            <Nav>
                <NavListBox>
                    <NavList onClick={() => changeSelect("person")} className={select==="person" ?"activate":""}>
                        인물
                        <span>
                            {data.searchPeoples.length}
                        </span>
                    </NavList>
                    <NavList onClick={() => changeSelect("movie")} className={select==="movie" ?"activate":""}>
                        영화
                        <span>
                        {data.searchMovies.length}
                        </span>
                    </NavList>
                    <NavList onClick={() => changeSelect("tv")} className={select==="tv" ?"activate":""}>
                        TV 프로그램
                        <span>
                        {data.searchTvs.length}
                        </span>
                    </NavList>
                </NavListBox>
            </Nav>
            <ContentColumn>
                <Label>
                    검색 > {select==="movie"? "영화 "
                    : (
                        select==="tv"? "TV 프로그램 "
                        :(
                            "인물 "
                        )
                    )}검색
                </Label>
                <ContentList>
                    {getContent()}

                </ContentList>

            </ContentColumn>

        </FlexBox>
    )
}


export default Search