import React, { Component } from 'react'
import request from 'superagent'

// import components
import SelectFilter from 'components/SelectFilter'

import styles from './index.css'


export default class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {

        // do your xhr request here (http://localhost:5000/category)
        request
            .get('http://localhost:5000/category')
            .end((err, res) => {
                if (res) {
                    console.log('res', res.body); // eslint-disable-line
                    // this.state = {data : res.body};
                    this.setState({data: res.body});
                    // console.log('resteststate', this.state); // eslint-disable-line
                }
            });
    }

    render() {
        console.log('this.state home', this.state);
        return (
            <div className={ styles.home }>
                <h1>ifs test react</h1>
                <SelectFilter
                    filters={this.state.data}
                    onChange={(currentFilter) => {
                        console.log('currentFilter', currentFilter) // eslint-disable-line
                    }}
                    rootStyle={ styles.filter }
                />
                <p>Filter by : </p>
            </div>
        )
    }
}
