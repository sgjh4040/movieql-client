import React, { useState } from "react";
import { useQuery } from 'react-apollo-hooks';
import { NOW_PLAY_MOVIE, MOVIES } from "./queries";
import styled from "styled-components";
import Movie from "./Components/Movie";
import IconButton from 'material-ui/IconButton';
import Select from '@material-ui/core/Select';

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
    const [page, setPage] = useState(1);
    const [title,setTitle] = useState('현재 상영작')
    const [category, setCategory] = useState('now_playing');
    const [language, setLanguage] = useState('ko-kr')

    const { data, loading } = useQuery(MOVIES, {
        variables: {
            page,
            category,
            language
        }
    });

    const handleChange = (e) => {
        console.log("click")
        setCategory(e.target.value);
        switch (e.target.value){
            case 'popular':
                setTitle("인기작");
                break;
            case 'top_rated':
                setTitle("평가굿");
                break;
            case 'upcoming':
                    setTitle("상영 예정작");
                    break;
            default:
                    setTitle("상영중");
                        
        }
    }



    if (loading) {
        return <div>loading</div>
    } else {
        console.log(data);
        return (
            <Wrapper>
                <Title>
                    {title}
                </Title>
                <div style={{textAlign:"end"}}>
                <Select
                    native
                    value={category}
                    onChange={handleChange}>
                    <option value="now_playing">상영중</option>
                    <option value="popular">인기작</option>
                    <option value="top_rated">평가굿</option>
                    <option value="upcoming">상영 예정작</option>
                </Select>
                </div>

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
