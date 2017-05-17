import React, { Component } from 'react'

// import components
import SelectFilter from 'components/SelectFilter'

import styles from './index.css'


export default class App extends Component {

    render() {

        return (
            <div className={ styles.home }>
                <h1>ifs test react</h1>
                <SelectFilter />
            </div>
        )
    }
}
