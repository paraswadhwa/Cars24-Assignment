import React, {Component} from 'react';
import { withStyles,Grid,TextField } from '@material-ui/core';
import Product from './Product';
import SearchBox from './SearchBox';

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

        const { filteredProducts } = this.props;

        if(filteredProducts && filteredProducts.length > 0){
            this.setState({
                filteredProductsList : filteredProducts
            });
        }
        else {
            this.props.fetchProducts();
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.filteredProducts !== this.props.filteredProducts) {
            if(this.props.filteredProducts){
                this.setState({
                    filteredProductsList : this.props.filteredProducts
                });
            }
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SearchBox 
                    filteredProducts       = {this.props.filteredProducts}
                    products               = {this.props.products}
                    updateFilteredProducts = {this.props.updateFilteredProducts}
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