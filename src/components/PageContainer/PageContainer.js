import React from 'react';
import styles from './PageContainer.module.css';
import ConsonantTable from '../ConsonantTable/ConsonantTable';
import FeatureDisplay from '../FeatureDisplay/FeatureDisplay';
import chart from '../../charts';

const PageContainer = props => {
    return (
        <div className={styles.page}>
            <FeatureDisplay />
            <ConsonantTable chart={chart} />
        </div>
    )
}

export default PageContainer;

