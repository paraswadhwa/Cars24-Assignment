import React,{Component} from 'react';
import { withStyles,Select,MenuItem,TextField,Typography,Button } from '@material-ui/core';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

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
            model            : "",
            brand            : "",
            filteredProducts : []
        }
    }

    componentDidMount() {

        // const { inventoryReducer } = this.props;

        // if(inventoryReducer.hasOwnProperty('products') === true && inventoryReducer.products.length > 0){
        //     this.setState({productsList : inventoryReducer.products});
        // }
        // else if(inventoryReducer.hasOwnProperty('products') === true && inventoryReducer.products.length === 0){
        //     // do  nothing - no products found
        // }
        // else {
        //     this.props.fetchProducts();
        // }
    }

    addFilter = (e) => {
        console.log(e.name);
        console.log(e.value)

        if(e.name == "model"){
            this.setState({model : e.value});
        }
        else if(e.name == "brand"){
            this.setState({brand : e.value});
        }
    }

    applyFilters = () => {

        let brandFilter = false;
        let modelFilter = false;
        let priceRangeFilter = false;

        if(this.state.brand != ""){
            brandFilter = true;
        }
        if(this.state.model != ""){
            modelFilter = true;
        }

        if(brandFilter == true){

        }
        if(modelFilter == true){

        }

    }

    render(){
        return (
            <>
            <br/>
            <Typography component="h3" variant="subtitle2" color="inherit">
              Price Range
            </Typography>
            <TextField
                id      ="outlined-name"
                label   ="Min"
                // className={classes.range}
                // value={rangeMin}
                name    ="rangeMin"
                margin  ="normal"
                variant ="outlined"
                // onChange={e => addFilter(e.target)}
            />
            <TextField
              id      ="outlined-name"
              label   ="Max"
              name    ="rangeMax"
              // className={classes.range}
              // value={rangeMax}
              // onChange={e => addFilter(e.target)}
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