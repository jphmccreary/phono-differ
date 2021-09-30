import styles from './Feature.module.css';

const Feature = props => {
    const { plusOrMinus, name, isFirst, isLast } = props;
    return (
        <div className={styles.feature}>
            {(isFirst) && '['}{plusOrMinus}{name}{isLast ? ']' : <span>,&nbsp;</span>}
        </div>
    );
}

export default Feature;
