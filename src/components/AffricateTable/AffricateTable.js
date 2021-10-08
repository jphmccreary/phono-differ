import Phone from '../Phone/Phone';
import styles from './AffricateTable.module.css';
import chart from '../../charts';

const { table, container } = styles;

const AffricateTable = props => {

    return (
        <div className={container}>
            <h3>affricates</h3>
            <div className={table}>
                {
                    Object
                        .getOwnPropertyNames(chart)
                        .filter(name => chart[name].affricateTable)
                        .map((name, index) => {
                            return (<Phone key={index} phone={chart[name]} id={name} />);
                        })
                }
            </div>
        </div>
    );
}

export default AffricateTable;
