import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './index.css'


export default class SelectFilter extends Component {

    static propTypes = {
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
