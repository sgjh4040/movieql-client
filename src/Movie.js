import React from "react";
import PropType from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`;
const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: auto;
  font-weight:600;
`;

const Movie = ({index,id,title,overview,poster,rating,vote_average,release_date})=>(
    <Link to={`/details/${id}`} >
        <Card background={`https://image.tmdb.org/t/p/w500${poster}`}>
            <Title>
            {title}/⭐{rating}
            </Title>

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