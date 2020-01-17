import React, {useState,useEffect} from "react";
import styled from "styled-components";


const PagingContainer = styled.div`
    display:flex;
    justify-content: space-around;
    width: 50%;
    margin: 30px auto;
`;
const PagingNumber = styled.div`
    font-size:20px;
    cursor: pointer;

`
const PagingBox = ({totalPage,handleChangePage}) => {

    const pageNumbers = [];
    for(let i = 1; i <= totalPage; i++){
        pageNumbers.push(<PagingNumber onClick={()=>handleChangePage(i)} key={i} >{i}</PagingNumber>)
    };

    return (
        <PagingContainer>
            {pageNumbers}
        </PagingContainer>
    )



}

export default PagingBox