import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import styled from "styled-components";
import Movie from "./Movie";


const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`

const Home = () =>
    
    <Container> 
        <Query query={HOME_PAGE}>{({ loading, data, error }) => {
            if (loading) return <span>loading</span>;
            if (error) return <span>something happened</span>;
            console.log(data);
            return data.movies.map((movie, index) => (
                <Movie key={index}
                    index
                    id={movie.id}
                    poster={movie.poster_path}
                    overview={movie.overview}
                    title={movie.title}
                    rating={movie.vote_average}
                >
                </Movie>
            ));
        }}
        </Query>
    </Container>
export default Home;
