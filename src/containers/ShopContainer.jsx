import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import Shop              	from '../components/Shop';

import { 
    fetchProducts
}                           from "../actions/productActions";


const ShopContainer = props => {
    return <Shop {...props} />
};

const mapStateToProps = state => {
    const { inventoryReducer } = state;

    return {
        inventoryReducer
    }
};

const mapDispatchToProps = dispatch => ({

    fetchProducts() {
        dispatch(fetchProducts());
    }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopContainer));