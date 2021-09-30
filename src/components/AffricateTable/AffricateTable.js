import { connect } from 'react-redux';
import Phone from '../Phone/Phone';
import styles from './AffricateTable.module.css';
import chart from '../../charts';

const AffricateTable = props => {
    const { table } = styles;

    return (
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
    );
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(AffricateTable);
