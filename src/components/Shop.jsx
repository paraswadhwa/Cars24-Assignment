import React, { Component } from 'react';
import { withStyles,Grid,TextField,Container } from '@material-ui/core';
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
            filteredProductsList : [],
            page : 1,
            prevY : 0
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
            this.props.fetchProducts(this.state.page);
        }

        // Options
        var options = {
            root: null, // Page as root
            rootMargin: '0px',
            threshold: 1.0
        };

        // Create an observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
        );
        
        //Observ the `loadingRef`
        this.observer.observe(this.loadingRef);
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

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;

        if (this.state.prevY > y && this.props.products.length == this.state.filteredProductsList.length && this.props.isFilterActive == false) {
            // scroll only when there is no search filter
            const curPage = Math.floor(this.state.filteredProductsList.length/5) + 1;
            this.props.fetchProducts(curPage);
            this.setState({ page: curPage });
        }
        this.setState({ prevY: y });
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Container>
                    <SearchBox 
                        filteredProducts       = {this.props.filteredProducts}
                        products               = {this.props.products}
                        updateFilteredProducts = {this.props.updateFilteredProducts}
                    />
                </Container>
                <Grid container spacing={16}> 
                    {this.state.filteredProductsList.map(item => (
                        <Product item={item} key={item.id}/>
                    ))}
                </Grid>
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ShopComponent)