import gql from "graphql-tag";

export const NOW_PLAY_MOVIE = gql`
    query{
        nowPlayMovies(page:1){
        title
        id
        genre_ids
        overview
        poster_path
        vote_average
        release_date
        }
    }

`
export const DRAMA_PAGE = gql`
    query{
        movies(page:1){
        title
        id
        genre_ids
        overview
        poster_path
        vote_average
        }
    }
`
export const MOVIE_DETAILS = gql`
    query getMovieDetail($movieId:Int!){
        movie(id:$movieId){
            title
            id
            genre_ids
            overview
            poster_path
            vote_average
        }
        suggestions(id:$movieId){
            title
            id
            genre_ids
            overview
            poster_path
            vote_average
        }
    }
`