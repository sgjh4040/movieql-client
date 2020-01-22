import gql from "graphql-tag";






export const MOVIES = gql`
    query movies($page:Int,$language:String,$category:String){
        movies(page:$page, language:$language, category: $category){
            page
            total_pages
            total_results
            results{
                title
                id
                genre_ids
                overview
                poster_path
                vote_average
                release_date
            }
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
            budget
            revenue
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
            backdrop_path
            release_date
        }
        credits(id:$movieId){
            id
            profile_path
            character
            gender
            name
        }
        keywords(id:$movieId){
            id
            name
        }
        videos(id:$movieId){
            id
            key
            name
        }
    }
`;
export const TVs = gql`
    query tvs($page:Int,$language:String,$category:String){
        tvs(page:$page, language:$language, category: $category){
            page
            total_pages
            total_results
            results{
                id
                name
                overview
                vote_average
                poster_path
                first_air_date
            }
        }
    }
`;
export const TV_DETAILS = gql`
    query Tv($tvId:Int!,$language:String){
        tv(id:$tvId, language:$language){
            name
            id
            overview
            poster_path
            vote_average
            first_air_date
            backdrop_path
            original_name
            status
            genres{
                    id
                    name
                }
        }
        tvCredits(id:$tvId, language:$language){
            id
            profile_path
            character
            gender
            name
        }
        tvSuggestions(id:$tvId, language:$language){
            name
            id
            vote_average
            backdrop_path
            first_air_date
        }
        tvKeywords(id:$tvId,language:$language){
            id
            name
        }
    }
`;

export const PERSON_DETAIL = gql`
    query person($personId:Int!,$language:String){
        person(id:$personId, language:$language){
            id
            birthday
            biography
            known_for_department
            place_of_birth
            homepage
            name
            gender
            order
            profile_path
            place_of_birth
            also_known_as

        }
        personTvCredits(id:$personId, language:$language){
            id
            original_name
            character
            first_air_date
            
            
        }
        personMovieCredits(id:$personId, language:$language){
            id
            character
            title
            release_date
        }
    }
`;

export const SEARCH =gql`
    query search($page:Int,$language:String,$term:String){
        searchMovies(page:$page, language:$language, term: $term){
            title
            id
            genre_ids
            overview
            poster_path
            vote_average
            release_date
        }
        searchTvs(page:$page, language:$language, term: $term){
            id
            name
            overview
            vote_average
            poster_path
            first_air_date
            
        }
        searchPeoples(page:$page, language:$language, term: $term){
            id
            name
            profile_path
        }
    }
`;