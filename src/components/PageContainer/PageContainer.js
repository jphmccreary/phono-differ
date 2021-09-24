import React from 'react';
import styles from './PageContainer.module.css';
import ConsonantTable from '../ConsonantTable/ConsonantTable';
import charts from '../../charts';

const PageContainer = props => {
    return (
        <div className={styles.page}>
            <ConsonantTable chart={charts.consonants} />
        </div>
    )
}

export default PageContainer;

