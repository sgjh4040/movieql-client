import React, {useState,useEffect}  from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Card = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-size: cover;
  background-position: center center;
  height: 280px;
  width: 470px;
  position: relative;
  margin:5px;
`;

const MovieImage = styled.div`
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  width: 185px;
    height: 280px;
`

const IntroBox = styled.div`
  display:flex;
  position:relative;
  flex-direction: column;
  padding: 10px 16px 16px;
  width: 298px;
`;
const IntroHeader = styled.div`
  display:inherit;
  flex-direction: row;
`;
const Title = styled.span`
  font-size:1.1em;
  line-height:1.1em;
  color: #000000;
  margin-bottom:2px;
`;
const Date = styled.span`
  display:block;
  color:#757575;
  font-size:1.1em;
`;
const Overview = styled.p`
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top:30px;
  color:#4d4d4d;
  font-size: 1.1em;
  line-height:1.2em;
  height: 7em;
`
const DetailBox = styled(Link)`
    width:100%;
    border-top: 1px solid #e3e3e3;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    color:#4d4d4d;
`;


const progressStyle = buildStyles({

  // Rotation of path and trail, in number of turns (0-1)
  rotation: 0,

  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  strokeLinecap: 'round',

  // Text size
  textSize: '30px',

  // How long animation takes to go from one percentage to another, in seconds
  pathTransitionDuration: 2,

  // Can specify path transition in more detail, or remove it entirely
  // pathTransition: 'none',

  // Colors
  pathColor: '#D3D454',
  textColor: '#FFFFFF',
  trailColor: '#413D17',
  backgroundColor: '#0D1C21',
})

const Movie = ({from, index, id, title, overview, poster, rating, vote_average, release_date }) => {
       
       const [percent,setPercent] = useState(0);

       const goTopage = from => {
         if(from==="movie"){
           return (
            <DetailBox to={`/details/${id}`}>
            더보기
          </DetailBox>
           )
         }else if(from === "tv"){
           return(
            <DetailBox to={`/tv/${id}`}>
            더보기
          </DetailBox>
           )
         }
       }

       useEffect(()=>{
         setPercent(vote_average);
       },[percent])

  return (
    <Card key={index}>
      <MovieImage background={`https://image.tmdb.org/t/p/w500${poster}`} />
      <IntroBox>
        <IntroHeader>
          <div style={{ width: '38px' }}>
            
            <CircularProgressbar styles={progressStyle} background={true} value={percent} maxValue={10} text={`${vote_average * 10}%`} />
          </div>
          <div style={{ width: '100%', marginLeft: '10px' }}>
            <Title>
              {title}
            </Title>
            <Date>
              {release_date}
            </Date>
          </div>
        </IntroHeader>
        <Overview>
          {overview}
        </Overview>
        {goTopage(from)}
      </IntroBox>
    </Card>
  )
}
Movie.PropType = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  overview: PropType.string.isRequired,
  poster: PropType.string.isRequired
}

export default Movie;