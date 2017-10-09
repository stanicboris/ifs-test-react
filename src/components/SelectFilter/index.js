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
    filterChange = (event) => {
        console.log('filterEntry', event.target.value);
        console.log('filterChange:this.props', this.props);
        var updatedList = this.props.filters;
        var filterEntry = event.target.value.toLowerCase();
        updatedList = updatedList.map(function(filter){
            if ((filter.name.toLowerCase().search(filterEntry) !== -1) || (filter.children = filter.children.filter(function(children){return children.name.toLowerCase().search(filterEntry) !== -1;})) == [])
            {
                return filter;
            }
            else
            {
                return {};
            }
        });
        
        this.setState({data: updatedList});
    }

    // componentDidMount() {
    //     console.log('this.props.filters', this.props);
    // }

    render() {
        const {
            rootStyle
        } = this.props;
        console.log('render:this.props', this.props);
        console.log('render:this.state', this.state);
        var filters = this.props.filters.map(function(filter) {
            var children = filter.children.map(function(children){
                return(
                    <li key={children.name}>
                        <span>{children.name}</span>
                    </li>
                );
            });
            return (
              <li key={filter.name}>
                  <span>{filter.name}</span>
                  <ul>{children}</ul>
              </li>
            );
        });

        return (
            <div className={ classNames(styles.selectfilter, rootStyle)}>
                <p>select a channel</p>
                <input type="text" placeholder="Search" onChange={this.filterChange}/>
                <ul>{filters}</ul>
            </div>
        );
    }
}
