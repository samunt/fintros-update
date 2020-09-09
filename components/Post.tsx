import * as React from 'react';
import {FC, ReactElement, useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {Category} from './category';
import {Button} from './Button';
import {Author} from './Author';
import {Title} from './Title';
import {Alink} from './Alink';

type PostProps = {
    category: string
    title: string
    author: string
    image: string
    link: string
}

const Post: FC<PostProps> = ({category, title, author, image, link}): ReactElement => {
    const {isDarkMode} = useContext(ThemeContext);
    const colorOfCategory = isDarkMode ? "white" : "black";
    return (
        <div style={{display:"flex", flexDirection: "column"}}>
            <img src={image}/>
            <Category color={colorOfCategory}>{category}</Category>
            {/*<Author color={colorOfCategory}>By: {author}</Author>*/}
            <Title color={colorOfCategory}>{title}</Title>
            <Alink color={colorOfCategory} href={link}>Read Article</Alink>
        </div>
    )
};

export default Post
