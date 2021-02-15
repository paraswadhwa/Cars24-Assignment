import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import Filters              from '../components/Filters';

import { 
    updateFilteredProducts
}                           from "../actions/productActions";

import {
    updateFilterDetails
}                           from "../actions/filterActions";


const FiltersContainer = props => {
    return <Filters {...props} />
};

const mapStateToProps = state => {
    const { inventoryReducer,filtersReducer } = state;

    return {
        filteredProducts : inventoryReducer.filteredProducts,
        products         : inventoryReducer.products,
        filtersReducer   : filtersReducer
    }
};

const mapDispatchToProps = dispatch => ({

    updateFilteredProducts(data) {
        dispatch(updateFilteredProducts(data));
    },
    updateFilterDetails(data) {
        dispatch(updateFilterDetails(data));
    }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FiltersContainer));