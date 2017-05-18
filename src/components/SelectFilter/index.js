import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './index.css'


export default class SelectFilter extends Component {

    static propTypes = {
        filters: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            children: PropTypes.array,
        })).isRequired,
        onChange: PropTypes.func,
        rootStyle: PropTypes.string
    }

    render() {
        const {
            rootStyle
        } = this.props;

        return (
            <div className={ classNames(styles.selectfilter, rootStyle)}>
                Code your Component here
            </div>
        )
    }
}
