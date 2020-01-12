import React from "react";
import { useQuery } from 'react-apollo-hooks';
import { NOW_PLAY_MOVIE } from "./queries";
import styled from "styled-components";
import Movie from "./Components/Movie";
import IconButton from 'material-ui/IconButton';

const Wrapper = styled.div`
    margin-top: 30px;
  display: block;
  min-height: 80vh;
`;
const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 15px;
`;

const MoviesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Home = () => {

    const {data,loading}= useQuery(NOW_PLAY_MOVIE);
    
    if(loading){
        return <div>loading</div>
    }else{
        console.log(data);
        return (
            <Wrapper>
                <Title>
                    인기 영화
                </Title>
                <MoviesContainer>
                    {data.nowPlayMovies.map((movie, index)=>(
                        <Movie
                        key={index}
                        index
                        id={movie.id}
                        poster={movie.poster_path}
                        overview={movie.overview}
                        title={movie.title}
                        rating={movie.vote_average}
                        />
                    ))}
                </MoviesContainer>
                

            </Wrapper>
        )

    }
}

// const Home = () =>
    
//     <Container> 
//         <Query query={HOME_PAGE}>{({ loading, data, error }) => {
//             if (loading) return <span>loading</span>;
//             if (error) return <span>something happened</span>;
//             console.log(data);
//             return data.movies.map((movie, index) => (
//                 <Movie key={index}
//                     index
//                     id={movie.id}
//                     poster={movie.poster_path}
//                     overview={movie.overview}
//                     title={movie.title}
//                     rating={movie.vote_average}
//                 >
//                 </Movie>
//             ));
//         }}
//         </Query>
//     </Container>
export default Home;
