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
            className={styles.cell}
            style={style}
        >
            <div className={styles.phone}>
                {symbol}
            </div>
        </div>
    );
}
