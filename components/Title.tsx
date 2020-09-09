import * as React from 'react';
import styled from 'styled-components'
import {FC} from "react";

type TitleProps = {
    color: string
}

export const Title: FC<TitleProps> = styled.p`
  color: ${props => props.color ? "black" : "white"};
  font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 0 auto;
`;

