import React,{useState} from "react";
import { useQuery } from 'react-apollo-hooks';
import {Query} from "react-apollo";
import styled from "styled-components";
import { TVs } from "../../queries";
import Select from '@material-ui/core/Select';
import Loader from "../../Components/loader";
import Movie from "../../Components/Movie";


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

const Tv= () =>{
    const [page, setPage] = useState(1);
    const [title,setTitle] = useState('현재 상영작');
    const [category, setCategory] = useState('on_the_air');
    const [language, setLanguage] = useState('ko-kr');

    const { data, loading } = useQuery(TVs, {
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
                    setTitle("평가 굿");
                    break;
            default:
                    setTitle("상영중");        
        }
    }
    if(loading){
        return <Loader/>
    }else{

        return(
            <Wrapper>
                <Title>
                    {title}
                </Title>
                <div style={{textAlign:"end"}}>
                <Select
                    native
                    value={category}
                    onChange={handleChange}>
                    <option value="on_the_air">상영중</option>
                    <option value="popular">인기작</option>
                    <option value="top_rated">평가굿</option>
                </Select>
                </div>

                <MoviesContainer>
                    {data.tvs.map((tv, index) => (
                        <Movie
                            from="tv"
                            key={index}
                            index
                            id={tv.id}
                            poster={tv.poster_path}
                            overview={tv.overview}
                            title={tv.name}
                            rating={tv.vote_average}
                            vote_average={tv.vote_average}
                            release_date={tv.first_air_date}
                        />
                    ))}
                </MoviesContainer>


            </Wrapper>
        )

    }

    return (
        <div>d</div>
    )
}
   

export default Tv;