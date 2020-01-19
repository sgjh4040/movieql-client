import React from "react";
import { useQuery } from 'react-apollo-hooks';
import { MOVIE_DETAILS } from "../../queries";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from "../../Movie";
import MovieIntroBox from "../../Components/MovieIntroBox";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { addComma } from "../../util";
import Loader from "../../Components/loader";
import RecommendBox from "../../Components/RecommendBox";

const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
}));

const Wrapper = styled.div`
background-image : url(${props => `https://image.tmdb.org/t/p/w500${props.url}`});
    display: block;
    min-height: 80vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    z-index:-1;
`;
const WrapperBack = styled.div`
    width:100%;
    height:100%;
    background-color: rgba( 0, 0, 0, 0.7);
    min-height: 80vh;
    
`;

const Card = styled.div`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    border-radius: 7px;
    width:100%;
`;

const UnderLine = styled.div`
    border-bottom:1px solid #D7D7D7;
`;

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
        width:70%;
        margin-left: 2%;
    }
    @media (min-width: 768px){
        width:70%;
        margin-left: 5%;
    }
`;
const Title = styled.h1`
    padding-top:40px;
    font-size: 24px;
    margin-bottom: 20px;
    
`
const GreyColumn = styled.div`
    width: 100%;
    padding: 10px;
    padding-top:40px;
    background-color:#F0F0F0;
    @media (min-width: 576px){
        width: 30%;
    }
    @media (min-width: 768px){
        width: 30%;
    }
`;

const CreditContainer = styled.ol`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    overflow:scroll;
    margin-bottom: 30px;
`;
const CreditBox = styled.li`
    border: 1px solid #e3e3e3;
    padding-bottom: 10px;
    width: 140px;
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
const Wrap = styled.div`
    font-size: 1rem;
    color: #000;
    margin-bottom: 15px;
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
const GenreButton = styled(Button)`
    margin-right: 5px;
`;
const RecommendContainer = styled.div`
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
    padding-bottom: 16px;
`;

const Detail = ({
    match: {
        params: { movieId }
    }
}) => {
   
    const { data, loading, error } = useQuery(MOVIE_DETAILS, {
        variables: {
            movieId: parseInt(movieId)
        }
    });
    const classes = useStyles();

  
    
    if (loading) return <Loader/>
    if (error) return "error";
    const topCredits = data.credits.slice(0, 5);

    return (
        <>
            <Wrapper url={data.movie.backdrop_path}>
                <WrapperBack>
                    <MovieIntroBox from="movie" data={data} />
                </WrapperBack>
            </Wrapper>

            <FlexBox>
                <Column >
                    <Title>
                        주요 출연진
                </Title>
                    <CreditContainer>
                        {topCredits.map(credit => (
                            <CreditBox>
                                <Link to={`/person/${credit.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${credit.profile_path}`}>
                                    </img>
                                </Link>
                                <NameBox>
                                    <Name>
                                        {credit.name}
                                    </Name>
                                </NameBox>
                                <Charactor>
                                    {credit.charactor}
                                </Charactor>
                            </CreditBox>
                        ))}
                    </CreditContainer>
                    <UnderLine />
                    <Title>
                        추천 작품
                </Title>
                    <RecommendContainer>
                        {data.suggestions.map(movie => <RecommendBox from="movie" data={movie}/>)}
                    </RecommendContainer>
                    
                </Column>
                <GreyColumn>
                    <Wrap>
                        <Label>
                            원재
                        </Label>
                        {data.movie.original_title}
                    </Wrap>
                    <Wrap>
                        <Label>
                            상태
                        </Label>
                        {data.movie.status}
                    </Wrap>
                    <Wrap>
                        <Label>
                            원어
                        </Label>
                        영어
                    </Wrap>
                    <Wrap>
                        <Label>
                            상영시간
                        </Label>
                        {data.movie.runtime} 분
                    </Wrap>
                    <Wrap>
                        <Label>
                            제작비
                        </Label>
                        ${addComma(data.movie.budget)}
                    </Wrap>
                    <Wrap>
                        <Label>
                            수익
                        </Label>
                        ${addComma(data.movie.revenue)}
                    </Wrap>
                    <Wrap>
                        <Label>
                            장르
                        </Label>
                        {data.movie.genres.map(genre => <GenreButton className={classes.button} size="small" variant="outlined">{genre.name}</GenreButton>)}
                    </Wrap>
                    <Wrap>
                        <Label>
                            키워드
                        </Label>
                        {data.keywords.map(keyword => <GenreButton className={classes.button} size="small" variant="outlined">{keyword.name}</GenreButton>)}
                    </Wrap>
                    
                </GreyColumn>
            </FlexBox>



        </>
    )
}
export default Detail;
