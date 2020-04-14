import React from 'react';

import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='menu-content'>
                    <h1 className='menu-title'>HATS</h1>
                    <span className='action-call'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='menu-content'>
                    <h1 className='menu-title'>JACKETS</h1>
                    <span className='action-call'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='menu-content'>
                    <h1 className='menu-title'>SNEAKERS</h1>
                    <span className='action-call'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='menu-content'>
                    <h1 className='menu-title'>WOMEN</h1>
                    <span className='action-call'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='menu-content'>
                    <h1 className='menu-title'>MEN</h1>
                    <span className='action-call'>SHOP NOW</span>
                </div>
            </div>

        </div>
    </div>
);

export default HomePage;