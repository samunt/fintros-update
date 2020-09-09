import * as React from 'react';
import styled from 'styled-components'
import {FC} from "react";

type CategoryProps = {
    color: string
}

export const Category: FC<CategoryProps> = styled.p`
  color: ${props => props.color ? "black" : "white"};
  font-size: 1.2em;
  text-align: center;
`;

