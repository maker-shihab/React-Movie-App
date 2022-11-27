import LiveTvIcon from '@mui/icons-material/LiveTv';
import React from 'react';
import './Headers.css';

const Headers = () => {
    return (
        <header>
            <div className='header-content'>
                <h1 onClick={()=> window.scroll(0,0)}><LiveTvIcon style={{width: '2.8rem', height: '2.8rem'}}/>
                MAKERS MOVIE 
                </h1>
            </div>
        </header>
    );
};

export default Headers;