import React, {useState} from "react";
import { useQuery } from 'react-apollo-hooks';
import { NOW_PLAY_MOVIE, MOVIES } from "./queries";
import styled from "styled-components";
import Movie from "./Components/Movie";
import IconButton from 'material-ui/IconButton';

const Wrapper = styled.div`
    margin: 0 auto;
  display: block;
  min-height: 80vh;
  max-width: 1000px;

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
    const [page,setPage] = useState(1);
    const [category, setCategory] = useState('now_playing');
    const [language, setLanguage] =useState('ko-kr')

    const { data, loading } = useQuery(MOVIES,{
        variables:{
            page,
            category,
            language
        }
    });



    if (loading) {
        return <div>loading</div>
    } else {
        console.log(data);
        return (
            <Wrapper>
                <Title>
                    인기 영화
                </Title>
                <MoviesContainer>
                    {data.movies.map((movie, index) => (
                        <Movie
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
