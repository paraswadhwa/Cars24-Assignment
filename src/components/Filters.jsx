import React,{Component} from 'react';
import { withStyles,Select,MenuItem,TextField,Typography,Button } from '@material-ui/core';

const styles = {
  range: {
    width: '50%'
  }
};

class Filters extends Component {

    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            minRange : "",
            maxRange : ""
        }
    }

    addFilter = (e) => {

        if(e.name == "rangeMin"){
            this.setState({minRange : e.value});
        }
        else if(e.name == "rangeMax"){
            this.setState({maxRange : e.value});
        }
    }

    applyFilters = () => {

        let filteredItems = this.props.products;

        if(this.state.minRange && this.state.maxRange){
            filteredItems = this.filterProductsByPriceRange();
        }

        this.props.updateFilteredProducts(filteredItems);
    }

    filterProductsByPriceRange = () => {
        let {products} = this.props;

        products = products.filter((item) => {
            return item.price > this.state.minRange && item.price < this.state.maxRange
        });

        return products;
    }

    render(){
        return (
            <>
            <br/>
            <Typography component="h3" variant="subtitle2" color="inherit">
              Price Range
            </Typography>
            <TextField
                id      = "outlined-name"
                label   = "Min"
                // className={classes.range}
                value   = {this.state.minRange}
                name    = "rangeMin"
                margin  = "normal"
                variant = "outlined"
                onChange={e => this.addFilter(e.target)}
            />
            <TextField
              id      ="outlined-name"
              label   ="Max"
              name    ="rangeMax"
              // className={classes.range}
              value   = {this.state.maxRange}
              onChange={e => this.addFilter(e.target)}
              margin  ="normal"
              variant ="outlined"
            />
            <br/>
            <br/>
            {
            /*<Typography component="h3" variant="subtitle2" color="inherit">
              Brand
            </Typography>
            <TextField
                id      = "outlined-brand"
                label   = "Brand"
                value   = {this.state.brand}
                name    = "brand"
                margin  = "normal"
                variant = "outlined"
                onChange={e => this.addFilter(e.target)}
            />
            <br/>
            <br/>
            <Typography component="h3" variant="subtitle2" color="inherit">
              Model
            </Typography>
            <TextField
                id      = "outlined-model"
                label   = "Model"
                value   = {this.state.model}
                name    = "model"
                margin  = "normal"
                variant = "outlined"
                onChange={e => this.addFilter(e.target)}
            />*/
            }
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.applyFilters}>
              Apply Filters
            </Button>
            </>
        )
    }
}

export default withStyles(styles)(Filters)