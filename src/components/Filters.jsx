import React,{Component} from 'react';
import { withStyles,Select,MenuItem,TextField,Typography,Button,InputLabel} from '@material-ui/core';

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
            maxRange : "",
            brand    : "",
            brandsList : []
        }
    }

    componentDidMount(){
        let brands = [];

        this.props.products && this.props.products.forEach(item => {
            if(brands.includes(item.brand) == false){
                brands.push(item.brand);
            }
        });

        this.setState({brandsList : brands});
    }

    componentDidUpdate(prevProps, prevState){

        if (prevProps.products !== this.props.products) {
            let brands = [];

            this.props.products.forEach(item => {
                if(brands.includes(item.brand) == false){
                    brands.push(item.brand);
                }
            });

            this.setState({brandsList : brands});
        }
    }

    addFilter = (e) => {

        if(e.name == "rangeMin"){
            this.setState({minRange : e.value});
        }
        else if(e.name == "rangeMax"){
            this.setState({maxRange : e.value});
        }
        else if(e.name == "brand"){
            this.setState({brand : e.value});
        }
    }

    applyFilters = () => {

        let filteredItems = this.props.products;

        if(this.state.minRange && this.state.maxRange){
            filteredItems = this.filterProductsByPriceRange(filteredItems);
        }
        if(this.state.brand){
            filteredItems = this.filterProductsByBrand(filteredItems);
        }

        this.props.updateFilteredProducts(filteredItems);
    }

    clearFilters = () => {
        
        this.setState({minRange : "", maxRange : "", brand : ""});

        this.props.updateFilteredProducts(this.props.products);
    }

    filterProductsByPriceRange = (products) => {

        products = products.filter((item) => {
            return item.price > this.state.minRange && item.price < this.state.maxRange
        });

        return products;
    }

    filterProductsByBrand = (products) => {

        products = products.filter((item) => {
            return item.brand.includes(this.state.brand);
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
            <InputLabel id="brandLabel">Brand</InputLabel>
            <Select
                labelId="brandLabel"
                id="brand"
                value={this.state.brand}
                name="brand"
                onChange={e => this.addFilter(e.target)}
            >
                {
                    this.state.brandsList.map((item,index) => {
                        return(
                            <MenuItem value={item} key={index}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.applyFilters}>
                Apply Filters
            </Button>
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.clearFilters}>
                Clear Filters
            </Button>
            </>
        )
    }
}

export default withStyles(styles)(Filters)