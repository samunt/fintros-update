import * as React from 'react';
import {FC, ReactElement, useContext, useEffect, useState} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import Post from './Post'
import {Button} from './Button';
import styles from './Blog.module.css';
import axios from "axios";

type BlogProps = {
    title: string
}

const Blog: FC<BlogProps> = ({title}): ReactElement => {
    let counter = 0;
    let response = [];
    let Posts = [];
    let temp = [{type: "yes", title: "yes", by:"you", url: "www.google.com"}];
    const {isDarkMode} = useContext(ThemeContext);
    const [list, setList] = React.useState([]);
    function fetchBlogs(){
        let url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        let count = 30;
        axios({
            method: 'post',
            url: '/api/grabIt',
            data: {
                url: url,
                count: count
            }
        })
            .then(function (res) {
                setList(res.data.response);
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                <Button
                    buttonColor={!!isDarkMode}
                    onClick={ () => null}
                >Even</Button>
                <Button buttonColor={!!isDarkMode}
                        onClick={fetchBlogs}
                >FETCH</Button>
                <Button
                    buttonColor={!isDarkMode}
                    onClick={ () => null}
                >Odd</Button>
                <ul >
                    {list.map((item, i) => {
                        return <li key={i} style={{ listStyleType: "none", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center" }}>
                            <Post category={item.type} title={item.title} author={item.by} image={item.url} link={item.url} />
                        </li>;
                    })}
                </ul>
            </div>
        </>
    )
};

export default Blog
