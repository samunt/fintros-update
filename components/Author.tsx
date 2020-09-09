import * as React from 'react';
import styled from 'styled-components'
import {FC} from "react";

type AuthorProps = {
    color: string
}

export const Author: FC<AuthorProps> = styled.p`
  color: ${props => props.color ? "black" : "white"};
  font-size: 1em;
  text-align: center;
`;

