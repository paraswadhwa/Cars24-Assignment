import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import Filters            	from '../components/Filters';

// import { 
// 	filterProducts,
// 	sortProducts 
// } 							from "../actions/productActions";


const FiltersContainer = props => {
    return <Filters {...props} />
};

// const mapStateToProps = (state) => ({
//   products: state.products.items,
//   filteredProducts: state.products.filteredItems,
//   size: state.products.size,
//   sort: state.products.sort,
// });

const mapStateToProps = state => {
    const { inventoryReducer } = state;

    return {
        inventoryReducer
    }
};

const mapDispatchToProps = dispatch => ({

    // fetchProducts() {
    //     dispatch(fetchProducts());
    // }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FiltersContainer));