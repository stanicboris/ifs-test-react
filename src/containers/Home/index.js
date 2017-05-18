import React, { Component } from 'react'

// import components
import SelectFilter from 'components/SelectFilter'

import styles from './index.css'


export default class App extends Component {

    componentDidMount() {
        // do your xhr request here (http://localhost:5000/category)
    }

    render() {

        return (
            <div className={ styles.home }>
                <h1>ifs test react</h1>
                <SelectFilter
                    filters={[]}
                    onChange={(currentFilter) => {
                        console.log('currentFilter', currentFilter) // eslint-disable-line
                    }}
                    rootStyle={ styles.filter }
                />
            </div>
        )
    }
}
