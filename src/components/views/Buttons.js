import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';
import Button from '../ui/buttons/';

function Buttons(props) {

    const classes = useStyles(props);
    
    const buttonsConfig = [
        {type: 'Contained', items: [{preset: 'contained', color: 'primary'}, {preset: 'contained', color: 'secondary'}, {preset: 'contained', color: 'customColor'}]},
        {type: 'Outlined', items: [{preset: 'outlined', color: 'primary'}, {preset: 'outlined', color: 'secondary'}, {preset: 'outlined', color: 'customColor'}]},
        {type: 'Text', items: [{preset: 'text', color: 'primary'}, {preset: 'text', color: 'secondary'}, {preset: 'text', color: 'customColor'}]},
        {type: 'Icon-Button', items: [{preset: 'icon', color: 'primary', iconProps: { iconClass: 'material-icons', iconName: 'add' }}, {preset: 'icon', color: 'secondary', iconProps: { iconClass: 'material-icons', iconName: 'add' }}, {preset: 'icon', color: 'customColor', iconProps: { iconClass: 'material-icons', iconName: 'add' }}]},
        {type: 'Icon-Inverted', items: [{preset: 'icon-inverted', color: 'primary', iconProps: { iconClass: 'material-icons', iconName: 'add' }}, {preset: 'icon-inverted', color: 'secondary', iconProps: { iconClass: 'material-icons', iconName: 'add' }}, {preset: 'icon-inverted', color: 'customColor', iconProps: { iconClass: 'material-icons', iconName: 'add' }}]},
        {type: 'Button with Icon', items: [{preset: 'contained', color: 'primary', iconProps: { iconClass: 'material-icons', iconName: 'person', size: 16 }}, {preset: 'outlined', color: 'secondary', iconProps: { iconClass: 'material-icons', iconName: 'person', size: 16 }}, {preset: 'text', color: 'customColor', iconProps: { iconClass: 'material-icons', iconName: 'person', size: 16 }}]},
        {type: 'Sizes', items: [{color: 'primary', size: 'sm'}, {color: 'secondary', size: 'md'}, {color: 'customColor', size: 'lg'}]},
        {type: 'WithShadow', items: [{preset: 'icon-inverted', color: 'primary', shadow: 1, iconProps: { iconClass: 'material-icons', iconName: 'add' }}, {preset: 'icon-inverted', color: 'secondary', shadow: 2, iconProps: { iconClass: 'material-icons', iconName: 'add' }}, {preset: 'icon-inverted', color: 'customColor', shadow: 3, iconProps: { iconClass: 'material-icons', iconName: 'add' }}]},
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.root}>
                <div className={classes.themeController}>
                    <Switch
                        checked={props.darkMode}
                        color='primary'
                        onChange={() => props.toggleTheme(props.darkMode)}
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
                                                <span className={classes.value}>{values}</span>
                                                <Button { ...btnProps }>{btnProps.color}</Button>
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