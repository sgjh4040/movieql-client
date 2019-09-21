import React from "react";
import {Query} from "react-apollo";
import styled from "styled-components";
import { DRAMA_PAGE } from "../../queries";
const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`

const Drama= () =>
    <Container>
        <Query query={DRAMA_PAGE}>{({loading,data,error}) => {
            if(loading) return <span>loading</span>;
            if(error) return <span>something happened</span>
            console.log(data);
            return "1"
        }}


        </Query>
    </Container>

export default Drama;