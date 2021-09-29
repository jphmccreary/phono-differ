import styles from './Feature.module.css';

const Feature = props => {
    const { plusOrMinus, name } = props;
    return (
        <div className={styles.feature}>
            [{plusOrMinus}{name}]
        </div>
    );
}

export default Feature;
