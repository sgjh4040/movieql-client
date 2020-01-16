import React  from "react";
import { css } from "@emotion/core";
import { ClockLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default ({size=50, color="#0D1C23"})=> <ClockLoader css={override} size={size} color={color}/>