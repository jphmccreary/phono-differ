import React from 'react';
import styles from './PageContainer.module.css';
import ConsonantTable from '../ConsonantTable/ConsonantTable';
import FeatureDisplay from '../FeatureDisplay/FeatureDisplay';
import chart from '../../charts';
import AffricateTable from '../AffricateTable/AffricateTable';

// TODO maybe filter chart here? then pass filtered charts as props

const PageContainer = props => {
    return (
        <div className={styles.page}>
            <FeatureDisplay />
            <ConsonantTable chart={chart} />
            <AffricateTable chart={chart} />
        </div>
    )
}

export default PageContainer;

