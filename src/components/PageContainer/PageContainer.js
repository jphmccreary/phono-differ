import React from 'react';
import styles from './PageContainer.module.css';
import ConsonantTable from '../ConsonantTable/ConsonantTable';
import chart from '../../charts';

const PageContainer = props => {
    return (
        <div className={styles.page}>
            <ConsonantTable chart={chart} />
        </div>
    )
}

export default PageContainer;

