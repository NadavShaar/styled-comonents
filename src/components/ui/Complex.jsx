import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { lighten } from '../../utils/colors';
import withElevation from '../HOCs/withElevation.js';

const Complex = withStyles(theme => ({
    root: {
        display: 'flex'
    },
    left: {
        flex: 1,
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column'
    },
    right: {
        flex: 1,
        backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'column'
    },
    top: {
        flex: 1,
        cursor: 'pointer',
        backgroundColor: 'red',
        opacity: 0.5,
        '&:hover': {
            backgroundColor: props => lighten('#f00', .15)
        }
    },
    bottom: {
        flex: 1,
        cursor: 'pointer',
        backgroundColor: 'green',
        opacity: 0.5,
        '&:hover': {
            backgroundColor: props => lighten('#0f0', .15)
        }
    }
}))(class Complex extends React.Component {
    static propTypes = {
        classes: PropTypes.object,
    }
    render(){
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.root} { ...rest }>
                <div className={classes.left}>
                    <div className={classes.top}></div>
                    <div className={classes.bottom}></div>
                </div>
                <div className={classes.right}>
                    <div className={classes.top}></div>
                    <div className={classes.bottom}></div>
                </div>
            </div>
        )
    }
})


export default withElevation(function PresetComplex(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        // case 'styled': return <OutlineButton { ...rest} />;
        // case 'icon': return <IconButton { ...rest} />;
        default: return <Complex { ...rest} />;
    }
});