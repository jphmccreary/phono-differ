import React from 'react';
import styles from './Phone.module.css';

export default function Phone (props) {
    const { symbol, column, row } = props.phone;
    const style = {
        gridColumn: column,
        gridRow: row,
    };
    console.log(`${symbol}: ${style.gridColumn}, ${style.gridRow}`);
    return (
        <div
            className={styles.phone}
            style={style}
        >
            {symbol}
        </div>
    );
}
