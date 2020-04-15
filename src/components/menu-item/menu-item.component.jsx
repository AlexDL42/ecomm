import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (

    <div className={`${size} menu-item`}>
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

export default MenuItem;