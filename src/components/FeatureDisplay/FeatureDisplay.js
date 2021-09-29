import styles from './FeatureDisplay.module.css';
import { connect } from 'react-redux';
import chart  from '../../charts.js';
import React from 'react';
import Feature from '../Feature/Feature';

const featureNames = {
    consonantal: 'consonantal',
    sonorant: 'sonorant',
    continuant: 'continuant',
    delayedRelease: 'del rel',
    approximant: 'approximant',
    tap: 'tap',
    trill: 'trill',
    nasal: 'nasal',
    voice: 'voice',
    spreadGlottis: 'spread gl',
    constrictedGlottis: 'constr gl',
    labial: 'labial',
    round: 'round',
    labiodental: 'labiodental',
    coronal: 'coronal',
    anterior: 'anterior',
    distributed: 'distributed',
    strident: 'strident',
    lateral: 'lateral',
    dorsal: 'dorsal',
    high: 'high',
    low: 'low',
    front: 'front',
    back: 'back',
    tense: 'tense',
};

const FeatureDisplay = props => {

    //TODO something extra when exactly two phones are selected

    const { phonesFromState } = props;

    const selectedPhones = Object
        .getOwnPropertyNames(phonesFromState)
        .reduce((acc, current) => {
            const currentPhoneStateSelected = phonesFromState[current];
            if (currentPhoneStateSelected) acc.push(current);
            return acc;
        }, []);

    //TODO lol @ duplicate code
    const plusFeatures = Object.getOwnPropertyNames(featureNames)
        .filter(featureName => {
            for(let i = 0; i < selectedPhones.length; i++)
                if(chart[selectedPhones[i]][featureName] !== 1)
                    return false;
            return true;
        });

    const minusFeatures = Object.getOwnPropertyNames(featureNames)
        .filter(featureName => {
            for(let i = 0; i < selectedPhones.length; i++)
                if(chart[selectedPhones[i]][featureName] !== -1)
                    return false;
            return true;
        });

    return (
        <div className={styles.featureDisplay}>
            <div className={styles.plusFeatures}>
                {selectedPhones.length > 0 && plusFeatures.map((featureName, index) => <Feature key={index} plusOrMinus={'+'} name={featureNames[featureName]} />)}
            </div>
            <div className={styles.minusFeatures}>
                {selectedPhones.length > 0 && minusFeatures.map((featureName, index) => <Feature key={index} plusOrMinus={'-'} name={featureNames[featureName]} />)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        phonesFromState: state.phones,
    };
}

export default connect(mapStateToProps)(FeatureDisplay);
