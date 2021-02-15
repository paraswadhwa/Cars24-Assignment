import React,{Component} from 'react';
import { withStyles,Select,MenuItem,TextField,Typography,Button,InputLabel} from '@material-ui/core';

const styles = theme => ({
    range: {
    width: '50%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 120
  }
});

class Filters extends Component {

    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            minRange : "",
            maxRange : "",
            brand    : "",
            brandsList : [],
            filters  : false
        }
    }

    componentDidMount(){
        let brands = [];

        this.props.products && this.props.products.forEach(item => {
            if(brands.includes(item.brand) == false){
                brands.push(item.brand);
            }
        });

        if(this.props.filtersReducer){
            this.setState({
                minRange : this.props.filtersReducer.minRange,
                maxRange : this.props.filtersReducer.maxRange,
                brand    : this.props.filtersReducer.brand,
                filters  : this.props.filtersReducer.isActive,
            })
        }

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
        this.props.updateFilterDetails({
            isActive : true,
            brand    : this.state.brand,
            minRange : this.state.minRange,
            maxRange : this.state.minRange
        });
        this.setState({filters : true});
    }

    clearFilters = () => {
        
        this.setState({minRange : "", maxRange : "", brand : ""});

        this.props.updateFilteredProducts(this.props.products);
        this.props.updateFilterDetails({
            isActive : false,
            brand    : "",
            minRange : "",
            maxRange : ""
        });
        this.setState({filters : false});
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
                disabled = { this.state.filters}
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
              disabled = { this.state.filters}
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
                className={this.props.classes.selectEmpty}
                disabled = { this.state.filters}
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

            {
                this.state.filters == false ? 
                <Button variant="contained" color="primary" onClick={this.applyFilters}>
                    Apply Filters
                </Button>
                : 
                <Button variant="contained" color="primary" onClick={this.clearFilters}>
                    Clear Filters
                </Button>
            }
            </>
        )
    }
}

export default withStyles(styles)(Filters)