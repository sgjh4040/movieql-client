import React, {useState,useEffect} from "react";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    z-index: 0;
    background: transparent;
    @media (min-width: 576px){
        width: 100%;
    }
    @media (min-width: 768px){
        width: 1000px;
        
    }
`;

const Section = styled.section`
    display:flex;
    flex-direction: column;
@media (min-width: 576px){
        flex-direction: row;
    }
`;
const Image = styled.img`
    display: block;
    border-radius: 2px;
    width: 200px;
    height: 300px;
    border-width: 0px;
    outline: none;
    margin-bottom:20px;
    @media (min-width: 576px){
        width: 300px;
        height: 450px;
        margin-bottom:0;
    }
`;
const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right:40px;
    width:100%;
    @media (min-width: 576px){

    }
`;
const Title = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 2.4em;
    line-height: 1.1em;
    font-weight: 700;
    display: inline-block;
    color: #ffffff;

`;
const ReleaseDate = styled.span`
    opacity: 0.6;
    font-size: 1.7em;
    font-weight: 400;
    color: #ffffff;
`;

const HeaderInfo = styled.div`
    color: #ffffff;
`;
const H2 = styled.h2`
    font-weight: 600;
    line-height: 1.3em;
    font-size: 1.3em;
    margin-bottom: 10px;
`;
const Overview = styled.div`
    font-size: 1em;
    line-height: 1.4em;

`

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


const MovieIntroBox = ({data}) => {
    console.log(data)
    const [percent,setPercent] = useState(0);

       useEffect(()=>{
         setPercent(data.movie.vote_average);
       })
    return (
        <Container>
            <Section>
                <Image src={`https://image.tmdb.org/t/p/w500${data.movie.poster_path}`}></Image>
                <IntroBox>
                    <div style={{marginBottom:'30px'}}>
                        <Title>
                            {data.movie.title}
                        </Title>
                        <ReleaseDate>
                            {`(${data.movie.release_date})`}
                        </ReleaseDate>
                    </div>
                    <div style={{ width: '60px', marginBottom:'30px' }}>
                    <CircularProgressbar styles={progressStyle} background={true} value={percent} maxValue={10} text={`${percent * 10}%`} />
                    </div>
                    <HeaderInfo>
                        <H2>
                            개요
                        </H2>
                        <Overview>
                            {data.movie.overview}
                        </Overview>

                    </HeaderInfo>

                </IntroBox>
            </Section>

        </Container>
    )
}

export default MovieIntroBox;