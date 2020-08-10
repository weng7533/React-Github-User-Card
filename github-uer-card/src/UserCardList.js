import React, { Component } from 'react';
import './App.css';
import CardTemplate from './CardTemplate';
import styled from 'styled-components';



const UserCardList = props => {


    const FlexBox = styled.div
        `
        display: flex;
        flex-direction: column;
        align-items: center;
        .myinfo{
            
        }

    `
    const FollowerFlexBox = styled.div
        `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`

    return (
        <FlexBox>
            <h2>My Info</h2>
            <div className='myinfo'>
                <CardTemplate data={props.data.myData} />
            </div>
            <h2>My Follower Info</h2>
            <FollowerFlexBox>
                {props.data.myfollowerData ?
                    props.data.myfollowerData.map(follower =>
                        <CardTemplate data={follower} />
                    )
                    :
                    ''
                }
            </FollowerFlexBox>
        </FlexBox>
    )
}



export default UserCardList;