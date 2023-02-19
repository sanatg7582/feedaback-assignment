import React from 'react'
import styles from './Header.module.scss'
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <header className={styles.header}>
            <div><h2>FeedBack</h2></div>
            <div className={styles.navigation}>
                <ul>
                    <li>
                       <Link to="/">Default feedback button</Link> 
                    </li>
                    <li>
                        <Link to="/buttonWithmockApi">Feedback button with mock api</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header