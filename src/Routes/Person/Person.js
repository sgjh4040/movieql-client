import React, { useState } from "react";
import { useQuery } from 'react-apollo-hooks';
import styled from "styled-components";
import { PERSON_POPULAR } from "../../queries";
import Loader from "../../Components/loader";
import { Link } from "react-router-dom";


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
const Column = styled.div`
    display:inherit;
    flex-direction: column;
    width:100%;
    margin-left: 1%;
    margin-right: 50px;
    @media (min-width: 576px){
        
        margin-left: 2%;
    }
    @media (min-width: 768px){
        margin-left: 5%;
    }
`;
const Title = styled.h1`
    padding-top:40px;
    font-size: 24px;
    margin-bottom: 20px;
`;
const CreditContainer = styled.ol`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;
const CreditBox = styled.li`
    border: 1px solid #e3e3e3;
    padding-bottom: 10px;
    width: 235px;
    background-color: #fff;
    box-sizing: border-box;
    margin-right: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
const NameBox = styled.p`
    padding: 10px 10px 0 10px;
  font-size: 1em;
    line-height: 1.4em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Name = styled.a`
    font-weight: bold;
    color: #000;
`;
const Charactor = styled.p`
    padding: 0 10px;
  font-size: 0.9em;
  line-height: 1.4em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;


const Person = () => {
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState('ko-kr');
    const { data, loading,error } = useQuery(PERSON_POPULAR, {
        variables: {
            page,
            language
        }
    });

    if (loading) {
        return <Loader />
    }
    if (error) return "error";
    console.log(data);

    return (
        <FlexBox>
            <Column>
                <Title>
                    인기 인물
            </Title>
                <CreditContainer>
                    {data.personPopular.map(person => (
                        <CreditBox>
                            <Link to={`/person/${person.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w235_and_h235_face${person.profile_path}`}>
                                </img>
                            </Link>
                            <NameBox>
                                <Name>
                                    {person.name}
                                </Name>
                            </NameBox>
                        </CreditBox>
                    ))}
                </CreditContainer>
            </Column>
        </FlexBox>
    )
}

export default Person;