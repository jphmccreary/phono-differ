import React from 'react';
import styles from './Phone.module.css';

import { connect } from 'react-redux';
import { classList } from '../../utilityFunctions';
import { togglePhone } from '../../actions';

const Phone = (props) => {
    const { symbol, column, row } = props.phone;
    const { selected, toggleSelf } = props;

    const style = {
        gridColumn: column,
        gridRow: row,
    };
    return (
        <div
            className={styles.cell}
            style={style}
            onClick={toggleSelf}
        >
            <div className={classList(
                styles.cellInner,
                selected && styles.selected,
            )}>
                <div className={styles.phone}>
                    {symbol}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        selected: state.phones[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleSelf: () => dispatch(togglePhone(ownProps.id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
