import React from 'react';
import '../css/Header.css';
import PersonIcon  from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className='header__icon' fontSize='large' />
            </IconButton>

            <img
                className='header__logo'
                src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg'
                alt='Tinder Logo'
            />

            <IconButton>
                <ForumIcon className='header__icon' fontSize='large' />
            </IconButton>
        </div>
    );
}

export default Header;