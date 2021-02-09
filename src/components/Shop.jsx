import React, {Component} from 'react';
import { withStyles,Grid,TextField } from '@material-ui/core';
import Product from './Product';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class ShopComponent extends Component {

    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            searchTerm           : "",
            filteredProductsList : []
        };
    }

    componentDidMount() {

        const { inventoryReducer } = this.props;

        if(inventoryReducer.hasOwnProperty('products') === true && inventoryReducer.products.length > 0){
            this.setState({
                filteredProductsList : inventoryReducer.products
            });
        }
        else if(inventoryReducer.hasOwnProperty('products') === true && inventoryReducer.products.length === 0){
            // do  nothing - no products found
        }
        else {
            this.props.fetchProducts();
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.inventoryReducer.products !== this.props.inventoryReducer.products) {
            if(this.props.inventoryReducer.products){
                this.setState({
                    filteredProductsList : this.props.inventoryReducer.products
                });
            }
        }
    }

    updateSearchTerm = (e) => {

        const searchTerm = e.target.value ? e.target.value.toLowerCase() : "";

        const {inventoryReducer : {products}} = this.props;

        let filteredProducts = products.filter((item) => {
            return item && (item.brand && item.brand.toLowerCase().includes(searchTerm) == true || item.model && item.model.toLowerCase().includes(searchTerm) === true);
        });

        this.setState({searchTerm : searchTerm ,filteredProductsList : filteredProducts});
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <TextField
                    id      = "outlined-search"
                    label   = "Search"
                    // className={classes.range}
                    value   = {this.state.searchTerm}
                    name    = "searchBox"
                    margin  = "normal"
                    variant = "outlined"
                    onChange={(e) => this.updateSearchTerm(e)}
                />
                <Grid container spacing={16}> 
                    {this.state.filteredProductsList.map(item => (
                        <Product item={item} key={item.id}/>
                    ))}
                </Grid> 
            </div>
        )
    }
}

export default withStyles(styles)(ShopComponent)