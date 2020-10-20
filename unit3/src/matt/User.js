import React from 'react'
import './matt.css'

export default function User({ details }) {
    if (!details){return <h3>Working of your request...</h3>}
    return (
        <div className='user container'>
        <img src={details.avatar} alt=`pic of ${details.name}` width="150" height="150" />
            <h2>{details.user}</h2>
            <h4>{details.position}</h4>
        </div>

    )}