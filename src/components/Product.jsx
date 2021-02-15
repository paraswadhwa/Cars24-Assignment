import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    grid: {
        marginTop: 20,
        marginLeft: 30
    }
});


class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, item } = this.props;

        return (
            <Grid item xs={3} className={classes.grid}>
                <Card className={classes.card} key={item.id}>
                    <CardMedia
                        className = {classes.media}
                        image     = {"http://localhost:3001/images/" + item.image}
                        title     = {item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom align ="center">
                            {item.brand + " " + item.model} 
                        </Typography>
                        <Typography component="p" align ="center">
                            Price : Rs. {item.price}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
    
}


Product.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired
}

export default withStyles(styles)(Product)