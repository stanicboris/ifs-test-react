# ifs-test-react


# Specs

With ReactJS, create a select control with autocomplete.

* Get data in the .json file by using an XHR request
* Pass the data to the component and build the select with it
* When the user type some text the component is able to filter the result by displaying only the items that include the typing term
* We can select an item from the select by clicking on it.

## Expected Design
<img src="https://raw.githubusercontent.com/devaublanc/ifs-test-react/master/select.png" alt="select">

## Expected props

Prop | Description | Type | Default
---- | ----------- | ------- | -------
`filters` | Filters that contains the tree nodes | `array` | `null`
`onChange` | This function is executed when a filter is clicked. It return the current filter in the callback method | `func` | `() => {}`
`rootStyle` | Additional className to customize the style of the component | `string` | `null`


# Getting Started

## 1) Installation

Fork this project on your Github

```
$ git clone https://github.com/devaublanc/ifs-test-react.git
$ npm i
$ npm start
```

then open http://localhost:3005/


## 2) Code the feature

We already create the configuration Webpack for you ;)
You have an empty component at `src/components/SelectFilter/index.js`, complete the code inside this file.

```javascript
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
```

The component is initialize in `src/containers/Home/index.js`

```javascript
import React, { Component } from 'react'

// import components
import SelectFilter from 'components/SelectFilter'

import styles from './index.css'


export default class App extends Component {

    componentDidMount() {
        // do your xhr request here
    }

    render() {

        return (
            <div className={ styles.home }>
                <h1>ifs test react</h1>
                <SelectFilter />
            </div>
        )
    }
}
```

## 3) Submit the feature

When you have finish commit the feature on your fork and submit us the link :) Thanks !
