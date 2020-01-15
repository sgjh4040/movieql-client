import React from "react";
import { useQuery } from 'react-apollo-hooks';
import { MOVIE_DETAILS } from "../../queries";
import styled from "styled-components";
import Movie from "../../Movie";
import MovieIntroBox from "../../Components/MovieIntroBox";

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

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 40px;
`
const Card = styled.div`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    border-radius: 7px;
    width:100%;
`;

const FlexBox = styled.div`
    display:flex;
    flex-direction: row;
`;

const CreditContainer = styled.ol`
    list-style-type: none;
/* list-style-position: inside; */
   margin: 0;
   padding: 0;
  display: flex;
  overflow:scroll;
`;
const CreditBox = styled.li`
    border: 1px solid #e3e3e3;
    padding-bottom: 10px;
      width: 140px;
    background-color: #fff;
    box-sizing: border-box;
    margin-right: 10px;
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

const Image = Card.withComponent("img");

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;    
`
const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
  font-size: 20px;
`;
const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;
const Contents = styled.span`
    padding:15px;
`



const Detail = ({
    match: {
        params: { movieId }
    }
}) => {
    const { data, loading, error } = useQuery(MOVIE_DETAILS, {
        variables: {
            movieId: parseInt(movieId)
        }
    })

    if (loading) return "loading";
    if (error) return "error";

    return (
        <>
            <Wrapper url={data.movie.backdrop_path}>
                <WrapperBack>
                    <MovieIntroBox data={data} />
                </WrapperBack>
            </Wrapper>

            <FlexBox>
                <div style={{ width:'70%'}}>
                    <CreditContainer>
                        {data.credits.map(credit => (
                            <CreditBox>
                                <a>
                                    <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${credit.profile_path}`}>
                                    </img>
                                </a>
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
                </div>
                <div style={{ width:'30%', backgroundColor:'#F0F0F0' }}>
data 추가
                </div>
            </FlexBox>



        </>
    )
    // return (
    //     <React.Fragment>
    //         <Container>
    //             <Image src={`https://image.tmdb.org/t/p/w500${data.movie.poster_path}`}>

    //             </Image>
    //             <Contents>
    //                 <Title>
    //                     {data.movie.title}
    //                 </Title>
    //                 <Paragraph bold>
    //                     {data.movie.vote_average}⭐️
    //                         </Paragraph>
    //                 <Paragraph>
    //                     {data.movie.overview}
    //                 </Paragraph>

    //             </Contents>
    //         </Container>
    //         <Title>추천 영화</Title>
    //         <MovieContainer>
    //             {console.log(data)}
    //             {data.suggestions.map(movie => (
    //                 <Movie
    //                     key={movie.id}
    //                     id={movie.id}
    //                     title={movie.title}
    //                     poster={movie.poster_path}
    //                     rating={movie.vote_average}
    //                 >

    //                 </Movie>
    //             ))}
    //         </MovieContainer>
    //     </React.Fragment>
    // )
}
export default Detail;
