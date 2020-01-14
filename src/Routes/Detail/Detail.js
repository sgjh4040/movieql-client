import React from "react";
import { useQuery } from 'react-apollo-hooks';
import { MOVIE_DETAILS } from "../../queries";
import styled from "styled-components";
import Movie from "../../Movie";
import MovieIntroBox from "../../Components/MovieIntroBox";

const Wrapper = styled.div`
background-color:#333333;
  display: block;
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
`
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
    const { data, loading,error } = useQuery(MOVIE_DETAILS, {
        variables: {
            movieId: parseInt(movieId)
        }
    })

    if (loading) return "loading";
    if (error) return "error";

    return (
        <Wrapper>
            <MovieIntroBox data={data}/>
        </Wrapper>
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
