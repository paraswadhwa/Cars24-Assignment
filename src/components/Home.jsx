import React, {Component} from 'react';
import Grid               from '@material-ui/core/Grid';
import ProductsContainer  from '../containers/ProductsContainer';
import FiltersContainer   from '../containers/FiltersContainer';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={9}>
                        <ProductsContainer />
                    </Grid>

                    <Grid item xs={3}>
                        <FiltersContainer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomeComponent