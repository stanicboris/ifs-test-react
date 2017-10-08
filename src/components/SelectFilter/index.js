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
