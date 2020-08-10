import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';



const CardTemplate = props => {


  const StyledCard = styled.div
    `

  max-width: 821px;
  min-width: 821px;
  height: 327px;
  background: transparent;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0,0,0,0.55);
  margin: 1.5rem;
 
  
._left {
    width:40%;
    height: auto;
    float:left;
    overflow:hidden;
    background:transparent;
    img {
        width:100%;
        height:auto;
        border-radius:10px 0 0 10px;
        -webkit-border-radius:10px 0 0 10px;
        -moz-border-radius:10px 0 0 10px;
        position:relative;
      }
    }
    ._right {
      width:60%;
      float:left;
      background:#000000;
      height: auto;
      border-radius:0 10px 10px 0;
      -webkit-border-radius:0 10px 10px 0;
      -moz-border-radius:0 10px 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
     h1 {
      color:white;
      font-family: 'Montserrat', sans-serif;
      font-weight:400;
      text-align:left;
      font-size:40px;
      margin:30px 0 0 0;
      padding:0 0 0 40px;
      letter-spacing:1px;
     }
      .__details {
        ul {
          list-style-type:none;
          padding:0 0 0 40px;
          margin:10px 0 0 0;
          li {
            display:inline;
            color:#e3e3e3;
            font-family: 'Montserrat', sans-serif;
            font-weight:400;
            font-size:14px;
            padding:0 40px 0 0;
          }
        }
      }
      .info {
      display: flex;
       flex-direction: column;
       align-items: center;
       height: -webkit-fill-available;

              p {
                color:white;
                font-family: 'Montserrat', sans-serif;
                font-size:1.5rem;
                min-width: auto;
                letter-spacing:.4rem;
                text-align: center;
                line-height:27px;
                padding: .5rem;
                margin: auto;
              }
              a {
                text-decoration:none;
                font-family: 'Montserrat', sans-serif;
                font-size:1.5rem;
                padding: .5rem;
                color:#ffda00;
                
              }
       }
`

  return (
    <StyledCard>
      {console.log(props.data)}
      <div className='_left' >{props.data.avatar_url !== null ? <img src={props.data.avatar_url} /> : ''}</div>

      <div className='_right'>
        <div className='info'>
          {props.data.name !== null && <p>{props.data.name}</p>}
          {props.data.login !== null && <p>{props.data.login}</p>}
          {props.data.bio !== null && <p>{props.data.bio}</p>}
          {props.data.url !== null && <a href={props.data.html_url}>Github Page</a>}
          {props.data.email !== null && <p>{props.data.email}</p>}

        </div>


      </div>
    </StyledCard>
  )

}

export default CardTemplate;