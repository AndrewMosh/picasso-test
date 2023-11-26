import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <Link to="/picasso-test/">
            <header className={styles.header}>
                <img src={logo} alt="blog" width={100} height={100} />
            </header>
        </Link>
    );
};

export default Header;
