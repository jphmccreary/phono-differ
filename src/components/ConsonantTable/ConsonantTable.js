import styles from './ConsonantTable.module.css';
import Phone from '../Phone/Phone';

export default function ConsonantTable (props) {
    const { chart } = props;

    return (
        <div className={styles.table}>
            {chart.reduce((acc, current, index) => {
                if (current.column != null && current.row != null)
                    acc.push(<Phone key={index} phone={current} />);
                return acc;
            }, [])}
        </div>
    );
}
