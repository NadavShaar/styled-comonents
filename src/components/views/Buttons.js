import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';
import Button from '../ui/buttons/';
import buttonsConfig from './buttonsConfig';

function Buttons(props) {

    const classes = useStyles(props);
    console.log(props.darkMode)

    return (
        <div className={classes.wrapper}>
            <div className={classes.root}>
                <div className={classes.themeController}>
                    <Switch
                        checked={props.darkMode}
                        color='primary'
                        onChange={() => props.toggleTheme(!props.darkMode)}
                    />
                    <span className={classes.themeLabel}>{props.darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
                {
                    buttonsConfig.map((buttons, index) => (
                        <div key={index}>
                            <span className={classes.title}>{buttons.type}</span>
                            <div className={classes.category}>
                                {
                                    buttons.items.map((btnProps, idx) => {

                                        let values = Object.entries(btnProps).map(ent => ent[0] === 'iconProps' ? '' : ent + ' ').toString().replace(/ ,/g, " | ").replace(/,/g, ": ");
                                        if(values.endsWith(' | ')) values = values.slice(0, values.length - 3);

                                        return (
                                            <div key={idx} className={classes.box}>
                                                <Button { ...btnProps }>{btnProps.color}</Button>
                                                <span className={classes.value}>{values}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '100%',
        padding: '20px 0px',
        background: theme.custom.backgrounds.color1
    },
    root: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        width: 960,
        margin: '0 auto'
    },
    category: {
        display: 'flex',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: 20,
        margin: 20,
        borderRadius: 4,
        minHeight: 150,
        background: theme.custom.backgrounds.color2,
        boxShadow: theme.custom.shadows[1]
    },
    title: {
        display: 'block',
        fontSize: 36,
        fontWeight: 500,
        color: theme.custom.colors.color3,
        padding: '10px 0px',
        textAlign: 'center'
    },
    value: {
        position: 'absolute',
        bottom: 10,
        textAlign: 'center',
        fontSize: 14,
        color: theme.custom.colors.color4,
        fontWeight: 500
    },
    themeController: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 500,
        color: theme.custom.colors.color3,
    }
}));

export default withTheme(Buttons);