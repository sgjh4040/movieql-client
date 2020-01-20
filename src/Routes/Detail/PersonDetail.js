import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from 'react-apollo-hooks';
import { PERSON_DETAIL } from "../../queries";
import { getYear } from "../../util";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Loader from "../../Components/loader";

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

const ProfileBox = styled.div`
    display: block;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    z-index: 2;
    border-width: 0px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
`;
const ProfielImage = styled.img`
    width:100%;
    margin-bottom: 30px;

`;
const Wrap = styled.div`
    font-size: 1rem;
    color: #000;
    margin-bottom: 15px;
    margin-left: 20px;
    line-height: 1.4em;
    @media (min-width: 576px){
        font-size: 1.1rem;
    }
`;
const Label = styled.div`
    font-size: 1.2rem;
    margin-bottom:10px;
    font-weight:700;
    @media (min-width: 576px){
        font-size: 1.3rem;
    }
`;

const ContentColumn = styled.div`
    display:inherit;
    flex-direction: column;
    width:100%;
    margin-right: 50px;
    @media (min-width: 576px){
        width:70%;
        margin-left: 2%;
    }
    @media (min-width: 768px){
        width:70%;
        margin-left: 5%;
    }

`;
const NameBox = styled.div`
    margin: 0;
    padding: 0;
    font-size: 2.4em;
    line-height: 1.1em;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 10px;

`;
const HistoryTable = styled.table`
    width: 100%;
    margin: 0;
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    
`;
const Year = styled.td`
    width: 30px;
    font-weight: 400;
    padding-left: 20px;
`;
const TableContent = styled.td`
    padding: 8px 20px 8px 10px;
`;
const PersonDetail = ({
    match: {
        params: { personId }
    }
}) => {
    const [language, setLanguage] = useState('ko-kr');
    const [select, setSelect] = useState('movie');

    const { data, loading } = useQuery(PERSON_DETAIL, {
        variables: {
            personId: parseInt(personId),
            language
        }
    });

    const onClickSelect = (e) => {
        console.log(e);
        setSelect(e);
    }


    if (loading) {
        return <Loader/>
    }
    console.log(data);
    data.personMovieCredits.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    data.personTvCredits.sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date));


    return (
        <FlexBox>
            <Column>
                <ProfileBox>
                    <ProfielImage sizes={"auto"} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.person.profile_path}`} />
                    <Wrap>
                        <Label>
                            유명분야
                    </Label>
                        {data.person.known_for_department}
                    </Wrap>
                    <Wrap>
                        <Label>
                            성별
                    </Label>
                        {data.person.gender === 1 ? ("여자")
                            : ("남자")}
                    </Wrap>
                    <Wrap>
                        <Label>
                            생일
                    </Label>
                        {data.person.birthday}
                    </Wrap>
                    <Wrap>
                        <Label>
                            출생지
                    </Label>
                        {data.person.place_of_birth}
                    </Wrap>
                    <Wrap>
                        <Label>
                            홈페이지
                    </Label>
                        <a href={data.person.homepage}>
                        {data.person.homepage}
                        </a>
                    </Wrap>
                    <Wrap>
                        <Label>
                            다른명칭
                    </Label>
                        {data.person.also_known_as.map(name => <div>{name}</div>)}
                    </Wrap>

                </ProfileBox>

            </Column>
            <ContentColumn>
                <NameBox>
                    {data.person.name}
                </NameBox>
                <Wrap>
                    <Label>
                        약력
                    </Label>
                    {data.person.biography}
                </Wrap>
                <Wrap>
                    <Label>
                        {select==='movie'? "영화" : "연기"}
                    </Label>
                    <ButtonGroup color="primary">
                        <Button onClick={() => onClickSelect('movie')}>영화</Button>
                        <Button onClick={() => onClickSelect('tv')}>연기</Button>
                    </ButtonGroup>
                    <HistoryTable>
                        {select === 'movie' ? (
                            data.personMovieCredits.map(element => (
                                <tr>
                                    <Year>
                                        {getYear(element.release_date)}
                                    </Year>
                                    <td>
                                        @
                                </td>
                                    <TableContent>
                                        {element.title} / {element.character}
                                    </TableContent>

                                </tr>
                            ))

                        ) :
                            (
                                data.personTvCredits.map(element => (
                                    <tr>
                                        <Year>
                                            {getYear(element.first_air_date)}
                                        </Year>
                                        <td>
                                            @
                                </td>
                                        <TableContent>
                                            {element.original_name} / {element.character}
                                        </TableContent>

                                    </tr>
                                ))
                            )}
                    </HistoryTable>

                </Wrap>

            </ContentColumn>
        </FlexBox>
    )
}

export default PersonDetail