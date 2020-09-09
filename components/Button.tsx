import * as React from 'react';
import styled from 'styled-components'
import {FC} from "react";

type ButtonProps = {
    buttonColor: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = styled.button`
  background: ${props => props.buttonColor ? "white" : "black"};
  color: ${props => props.buttonColor ? "black" : "white"};
  border-color: ${props => props.buttonColor ? "black" : "white"};
  width: 10rem;
  height: 45px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 10px;
`;

