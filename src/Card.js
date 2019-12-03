import React from 'react';


export default props => {
    console.log('props', props)
    return (
        <div className='card'>
            <img src={props.user.avatar_url} />
            <div>
                <div className='name'>{props.user.name}</div>
                <li>Login: {props.user.login}</li>
                <li>Location: {props.user.location}</li>
                {props.user.bio !== null ? `Bio: ${props.user.bio}` : ''}
            </div>
        </div>
    )
}