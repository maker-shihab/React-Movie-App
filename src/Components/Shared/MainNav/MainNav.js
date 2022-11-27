import MovieIcon from '@mui/icons-material/Movie';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const history = useNavigate();

    useEffect(() => {
        if (value === 0) {
            history("/");
        }
        else if (value === 1) {
            history("/movies");
        }
        else if (value === 2) {
            history("/series");
        }
        else if (value === 3) {
            history("/search");
        }
    }, [value, history])

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: '#2d313a',
            position: 'fixed',
            left: 0,
            right: 0,
            zIndex: 99,
            bottom: 0,
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction style={{ color: 'white' }} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction style={{ color: 'white' }} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{ color: 'white' }} label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction style={{ color: 'white' }} label="Search" icon={<ScreenSearchDesktopIcon />} />
            </BottomNavigation>
        </Box>
    );
}