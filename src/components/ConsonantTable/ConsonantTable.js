import styles from './ConsonantTable.module.css';
import Phone from '../Phone/Phone';

export default function ConsonantTable (props) {
    const { chart } = props;

    return (
        <div className={styles.table}>
            <div className={styles.rowLabel} style={{gridRow: 2, gridColumn: 1}}>
                <div>plosive</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 3, gridColumn: 1}}>
                <div>nasal</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 4, gridColumn: 1}}>
                <div>trill</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 5, gridColumn: 1}}>
                <div>tap/flap</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 6, gridColumn: 1}}>
                <div>fricative</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 7, gridColumn: 1}}>
                <div>lateral fricative</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 8, gridColumn: 1}}>
                <div>approximant</div>
            </div>
            <div className={styles.rowLabel} style={{gridRow: 9, gridColumn: 1}}>
                <div>lateral approximant</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 2, gridColumnEnd: 'span 2'}}>
                <div>bilabial</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 4, gridColumnEnd: 'span 2'}}>
                <div>labiodental</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 6, gridColumnEnd: 'span 2'}}>
                <div>interdental</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 8, gridColumnEnd: 'span 2'}}>
                <div>alveolar</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 10, gridColumnEnd: 'span 2'}}>
                <div>post-alveolar</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 12, gridColumnEnd: 'span 2'}}>
                <div>retroflex</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 14, gridColumnEnd: 'span 2'}}>
                <div>palatal</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 16, gridColumnEnd: 'span 2'}}>
                <div>velar</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 18, gridColumnEnd: 'span 2'}}>
                <div>uvular</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 20, gridColumnEnd: 'span 2'}}>
                <div>pharyngeal</div>
            </div>
            <div className={styles.columnLabel} style={{gridRow: 1, gridColumnStart: 22, gridColumnEnd: 'span 2'}}>
                <div>glottal</div>
            </div>
            {chart.reduce((acc, current, index) => {
                if (current.column != null && current.row != null)
                    acc.push(<Phone key={index} phone={current} />);
                return acc;
            }, [])}
        </div>
    );
}
