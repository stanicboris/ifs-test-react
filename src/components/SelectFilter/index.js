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
        console.log('filterChange:this.props.filters', this.props.filters);
        var updatedList = JSON.parse(JSON.stringify( this.props.filters ));
        var filterEntry = event.target.value.toLowerCase();
        updatedList = updatedList.map(function(filter){
            filter.children = filter.children.filter(function(children){
                return children.name.toLowerCase().search(filterEntry) !== -1;
            });
            
            if ((filter.name.toLowerCase().search(filterEntry) !== -1) || typeof(filter.children[0]) !== 'undefined')
            {
                return filter;
            }
            else
            {
                return {};
            }
        });
        console.log('updatedList',updatedList);
        this.setState({updatedData: updatedList});
    }

    handleClick = (event) => {
        // console.log('event.target.value', event.target.value);
        // event.preventDefault();
        // event.currentTarget.submit();
        this.setState({value: event.target.value});
        
    }

    
    render() {
        const {
            rootStyle
        } = this.props;
        
        console.log('render:this.props', this.props);
        console.log('render:this.state', this.state);
        
        var displayedData;
        
        if (this.state == null || typeof(this.state.updatedData) == 'undefined')
        {
            displayedData = JSON.parse(JSON.stringify( this.props.filters ));
        }
        else
        {
            displayedData = this.state.updatedData;
            console.log('render:this.state.updatedData', this.state.updatedData);
        }
        
        console.log('displayedData',displayedData);
        

        var filters = displayedData.map(function(filter) {
            if (typeof(filter.name) != 'undefined')
            {
                if (typeof(filter.children) != 'undefined')
                {
                    var children = filter.children.map(function(children){
                        return(
                            <option key={children.name}>
                                {children.name}
                            </option>
                        );
                    });
                }
                else
                {
                    children = 'children_rien';
                }

                return (
                    <div className="form-group" key={filter.name}>
                        <label>{filter.name}</label>
                        <select multiple className="form-control">
                            {children}
                        </select>
                    </div>
                );
            }
            else
            {
                return (null);
            }
        });


        return (
            <div className={ classNames(styles.selectfilter, rootStyle)}>
                <p>select a channel</p>
                <input type="text" placeholder="Search" onChange={this.filterChange}/>
                <form onChange={this.props.onChange}>
                    {filters}
                </form>
            </div>
        );
    }
}
