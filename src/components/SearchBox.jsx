import React, {Component} from 'react';
import { withStyles,Grid,TextField } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class SearchBoxComponent extends Component {

    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            searchTerm           : ""
        };
    }

    updateSearchTerm = (e) => {

        const searchTerm = e.target.value ? e.target.value.toLowerCase() : "";

        const {products} = this.props;

        let filteredProductsList = products.filter((item) => {
            return item && (item.brand && item.brand.toLowerCase().includes(searchTerm) == true || item.model && item.model.toLowerCase().includes(searchTerm) === true);
        });

        this.props.updateFilteredProducts(filteredProductsList);
        this.setState({searchTerm : searchTerm});
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <TextField
                    id      = "outlined-search"
                    label   = "Search"
                    className ={classes.range}
                    value   = {this.state.searchTerm}
                    name    = "searchBox"
                    margin  = "normal"
                    variant = "outlined"
                    onChange={(e) => this.updateSearchTerm(e)}
                />
            </div>
        )
    }
}

export default withStyles(styles)(SearchBoxComponent)