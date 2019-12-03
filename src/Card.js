import React from 'react';


export default props => {
    console.log('props', props)
    return (
        <div className='card'>
            <li>Name: {props.user.name}</li>
            <li>Login: {props.user.login}</li>
            <li>Location: {props.user.location}</li>
            {props.user.bio !== null ? `Bio: ${props.user.bio}` : ''}
        </div>
    )
}