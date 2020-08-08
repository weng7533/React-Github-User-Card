import React, { Component } from 'react';
import './App.css';

const CardTemplate = props => {
    return (
        <>
            {console.log(props.data)}
            <p>{props.data.avatar_url !== null ? <img src={props.data.avatar_url} /> : ''}</p>
            <p>{props.data.name !== null ? props.data.name : ''}</p>
            <p>{props.data.login !== null ? props.data.login : ''}</p>


            {props.data.url !== null ? <a href={props.data.html_url}>Github Page</a> : ''}

            <p>{props.data.bio !== null ? props.data.bio : ''}</p>
            <p>{props.data.email !== null ? props.data.email : ''}</p>
        </>
    )

}

export default CardTemplate;