import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (

    <div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}shop/${linkUrl}`)}>
        <div className='background-img'
        style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        
        <div className='menu-content'>
            <h1 className='menu-title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

);

export default withRouter(MenuItem);