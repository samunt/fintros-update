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
  height: 40px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 10px;
   width: 15rem;
   height: 70px;
   font-size: 1.5em;
  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
    width: 5rem;
    height: 40px;
    font-size: 1em;
  }
  @media only screen 
  and (min-device-width : 768px) 
  and (max-device-width : 1024px) {
    width: 7rem;
    height: 60px;
    font-size: 1.2em;
  }


`;

