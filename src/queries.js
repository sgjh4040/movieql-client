import gql from "graphql-tag";



export const MOVIES = gql`
    query movies($page:Int,$language:String,$category:String){
        movies(page:$page, language:$language, category: $category){
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

`;
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
`;
export const MOVIE_DETAILS = gql`
    query getMovieDetail($movieId:Int!){
        movie(id:$movieId){
            title
            id
            genre_ids
            overview
            poster_path
            vote_average
            release_date
            backdrop_path
            original_title
            status
            runtime
            genres{
                    id
                    name
                }

        }
        suggestions(id:$movieId){
            title
            id
            genre_ids
            overview
            poster_path
            vote_average
        }
        credits(id:$movieId){
            id
            profile_path
            character
            gender
            name

        }
    }
`