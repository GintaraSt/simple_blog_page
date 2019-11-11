import React, { Component } from 'react';
import './article.scss';
import ArticleImage from './assets/img/article_example_01.jpg';

class Article extends React.Component {
    render(){
        return (
            <div id="article-wrap" >
                <img src={ArticleImage} />
                <h1 >The key of the modern thinking</h1>
                <h2 >By: Alan Briderson</h2>
                <p >Lorem ipsum dolor sit amet,
                    homero primis putent an ius,
                    vis corpora convenire dissentiunt an.
                    Te blandit torquatos nec,
                    in nemore doctus vim.
                    Eos id qualisque patrioque vulputate.
                    Eripuit electram est ea.</p>
            </div>
        )
    }
}

export default Article;