import React,{useRef,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Wrap = styled.div`
    display: inline-block;
    position: relative;
    width: 250px;
    height: 141px;
    margin: 0 15px 0 0;
`;

const Image = styled.img`
    width: 250px;
    height: 141px;
    border-radius: 4px;
`;

const Description = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 4px;
`;
const Title = styled.span`
    font-weight: 400;
    font-size: 1em;
    padding-right: 10px;
    color: #000;
`;
const VoteAverage = styled.span`
    padding-top: 0;
    margin-right: 0;
    display: inline-flex;
    align-items: center;
`;
const Meta = styled.div`
    display:flex;
    position: absolute;
    width:100%;
    left: 0;
    bottom: 0;
    padding-left: 5px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.9);
`;
const ReleaseDate = styled.div`
    line-height: 1em;
    font-size: 1em;
    display: inline-flex;
    align-items: center;
`


const RecommendBox = ({
    title,
    id,
    genre_ids,
    overview,
    backdrop_path,
    release_date,
    vote_average }) => {
        const releaseEl = useRef(null);


        const presentBox = () =>{
            releaseEl.current.hidden= false;
        }
        const unpresentBox = () =>{
            releaseEl.current.hidden= true;
        }

        useEffect(()=>{
            releaseEl.current.hidden=true;
        },[])

    return (
        <Wrap onMouseOver={presentBox} onMouseLeave={unpresentBox}>
            <Link to={`/details/${id}`}>
                <Image src={`https://image.tmdb.org/t/p/w250_and_h141_face${backdrop_path}`} />
            </Link>
            <Description>
                <Title>
                    {title}
                </Title>
                <VoteAverage>
                    {vote_average}
                    <StarIcon fontSize="small"/>
                </VoteAverage>
                
            </Description>
            <Meta ref={releaseEl}>
                <ReleaseDate >
                    <DateRangeIcon fontSize="small"/>
                    {release_date}
                </ReleaseDate>
            </Meta>
        </Wrap>
    )
}

export default RecommendBox