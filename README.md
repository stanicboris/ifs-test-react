# ifs-test-react

# Installation

```
$ git clone https://github.com/devaublanc/ifs-test-react.git
$ npm i
$ npm start
```

then open http://localhost:3005/

# Specs

With ReactJS, create a select control with autocomplete.

* Get data in the .json file by using an XHR request
* Pass the data to the component and build the select with it
* When the user type some text the component is able to filter the result by displaying only the items that include the typing term
* We can select an item from the select by clicking on it.

# Expected Design
<img src="https://raw.githubusercontent.com/devaublanc/ifs-test-react/master/select.png" alt="select">

# Getting Started

We already create the configuration Webpack for you ;)
You have an empty component at `src/components/SelectFilter/index.js`, complete the code inside this file. The component is initialize in `src/containers/Home/index.js`
