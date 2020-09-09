import * as React from 'react';
import styled from 'styled-components'
import {FC} from "react";

type AlinkProps = {
    color: string
    href: string
}

export const Alink: FC<AlinkProps> = styled.a`
  color: ${props => props.color ? "black" : "white"};
    font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.125em;
    line-height: 1;
    padding-bottom: 0.25rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    border-bottom: 0.125rem solid currentcolor;
    margin: 0px;
    text-decoration: none;
    transition: all 100ms ease-in 0s;
  
`;

