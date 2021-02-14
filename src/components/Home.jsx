import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ShopContainer from '../containers/ShopContainer';
import FiltersContainer from '../containers/FiltersContainer';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={9}>
                        <ShopContainer />
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