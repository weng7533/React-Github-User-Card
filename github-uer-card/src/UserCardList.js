import React, { Component } from 'react';
import './App.css';
import CardTemplate from './CardTemplate';

const UserCardList = props => {

    return (
        <div className='App'>
            <h2>My Info</h2>
            <CardTemplate data={props.data.myData} />
            <h2>My Follower Info</h2>
            {props.data.myfollowerData ?
                props.data.myfollowerData.map(follower =>
                    <CardTemplate data={follower} />
                )
                :
                ''
            }
        </div>
    )
}



export default UserCardList;