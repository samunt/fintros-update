import * as React from 'react';
import {FC, ReactElement, useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {Button} from './Button';
import {useEffect} from "react";
import axios from "axios";

type ButtonContainerProps = {

}

const ButtonContainer: FC<ButtonContainerProps> = ({}): ReactElement => {
    const {isDarkMode} = useContext(ThemeContext);
    let grabitUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
    function fetchData() {
            axios({
                method: 'post',
                url: '/api/grabIt',
                data: {
                    url: grabitUrl,
                }
            })
            .then(function (res) {
                console.log(res)
                let someVal = "hello";
                return someVal
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Button
                buttonColor={!!isDarkMode}
                onClick={ () => fetchData()}
            >Even</Button>
            <Button
                buttonColor={!isDarkMode}
                onClick={ () => fetchData()}
            >Odd</Button>
        </div>
    )
};

export default ButtonContainer
