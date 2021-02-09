import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import Filters            	from '../components/Filters';

import { 
    updateFilteredProducts
}                           from "../actions/productActions";


const FiltersContainer = props => {
    return <Filters {...props} />
};

const mapStateToProps = state => {
    const { inventoryReducer } = state;

    return {
        filteredProducts : inventoryReducer.filteredProducts,
        products 		 : inventoryReducer.products
    }
};

const mapDispatchToProps = dispatch => ({

    updateFilteredProducts(data) {
        dispatch(updateFilteredProducts(data));
    }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FiltersContainer));