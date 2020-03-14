import React from 'react';
// import { withTheme } from 'styled-components';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Switch from '../ui/Switches';
// import Button from '../ui/Button1.jsx';
import Button from '../ui/buttons/';
// import Icon from '../ui/icons/';

function Buttons(props) {

    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.root}>
                <Switch
                    checked={props.darkMode}
                    onChange={() => props.toggleTheme(props.darkMode)}
                />
                <div className={classes.category}>
                    <div className={classes.box}>
                        <Button color='primary'>primary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='secondary'>secondary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='customColor'>Custom-Color</Button>
                    </div>
                </div>
                <div className={classes.category}>
                    <div className={classes.box}>
                        <Button color='primary' preset='outlined'>primary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='secondary' preset='outlined'>secondary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='customColor' preset='outlined'>Custom-Color</Button>
                    </div>
                </div>
                <div className={classes.category}>
                    <div className={classes.box}>
                        <Button color='primary' preset='text'>primary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='secondary' preset='text'>secondary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='customColor' preset='text'>Custom-Color</Button>
                    </div>
                </div>
                <div className={classes.category}>
                    <div className={classes.box}>
                        <Button color='primary' preset='icon' iconProps={{ iconClass: 'material-icons', iconName: 'add' }}></Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='secondary' preset='icon' iconProps={{ iconClass: 'material-icons', iconName: 'add' }}></Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='customColor' preset='icon' iconProps={{ iconClass: 'material-icons', iconName: 'add' }}></Button>
                    </div>
                </div>
                <div className={classes.category}>
                    <div className={classes.box}>
                        <Button color='primary' preset='icon-inverted' size='sm' iconProps={{ iconClass: 'material-icons', iconName: 'add' }}></Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='secondary' preset='icon-inverted' size='md' iconProps={{ iconClass: 'material-icons', iconName: 'add' }}></Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='customColor' preset='icon-inverted' size='lg' iconProps={{ iconClass: 'material-icons', iconName: 'add' }}></Button>
                    </div>
                </div>
                <div className={classes.category}>
                    <div className={classes.box}>
                        <Button color='primary' size='sm'>primary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='secondary' size='md'>secondary</Button>
                    </div>
                    <div className={classes.box}>
                        <Button color='customColor' size='lg'>Custom-Color</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    wrapper: {
        
    },
    root: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        // width: 960,
        // margin: '0 auto',
        background: theme.custom.colors.color3
    },
    category: {
        display: 'flex',
    },
    box: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        margin: 25,
        background: theme.custom.colors.color1
    }
}));

export default withTheme(Buttons);