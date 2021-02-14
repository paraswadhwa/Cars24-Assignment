import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import Shop              	from '../components/Shop';

import { 
    fetchProducts,
    updateFilteredProducts
}                           from "../actions/productActions";


const ShopContainer = props => {
    return <Shop {...props} />
};

const mapStateToProps = state => {
    const { inventoryReducer } = state;

    return {
        filteredProducts : inventoryReducer.filteredProducts,
        products 		 : inventoryReducer.products
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopContainer));