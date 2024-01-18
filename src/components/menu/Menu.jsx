import React from 'react';
import styles from "./menu.module.css";
const Menu = () => {
    return (
        <div className={styles.container}>
           <h1 className={styles.container}>{"What's hot"}</h1>
           <h1 className={styles.title}>Most Popular</h1>
        </div>
    );
};

export default Menu;