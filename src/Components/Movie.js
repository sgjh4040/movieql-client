import React from "react";
import PropType from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

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
  flex:1;
`

const IntroBox = styled.div`
  flex:2;
`;

const Movie = ({index,id,title,overview,poster,rating}) =>(
  <Link key={index} to={`/details/${id}`}>
    <Card>
      <MovieImage background={`https://image.tmdb.org/t/p/w500${poster}`}/>
      <IntroBox>
        <div>{title}{rating}</div>
      </IntroBox>
    </Card>
  </Link>
)
Movie.PropType = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  overview: PropType.string.isRequired,
  poster: PropType.string.isRequired
}

export default Movie;