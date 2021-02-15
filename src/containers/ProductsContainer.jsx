import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import Products            	from '../components/Products';

import { 
    fetchProducts,
    updateFilteredProducts
}                           from "../actions/productActions";


const ProductsContainer = props => {
    return <Products {...props} />
};

const mapStateToProps = state => {
    const { inventoryReducer,filtersReducer } = state;

    return {
        filteredProducts : inventoryReducer.filteredProducts,
        products 		 : inventoryReducer.products,
        isFilterActive   : filtersReducer.isActive
    }
};

const mapDispatchToProps = dispatch => ({

    fetchProducts(currentPage) {
        dispatch(fetchProducts(currentPage));
    },
    updateFilteredProducts(data) {
        dispatch(updateFilteredProducts(data));
    }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsContainer));