const buttonsConfig = [
    {
        type: 'Contained', 
        items: [
            {
                preset: 'contained', 
                color: 'primary'
            }, {
                preset: 'contained', 
                color: 'secondary'
            }, {
                preset: 'contained', 
                color: 'customColor'
            }
        ]
    },
    {
        type: 'Outlined', 
        items: [
            {
                preset: 'outlined', 
                color: 'primary'
            }, {
                preset: 'outlined',
                color: 'secondary'
            }, {
                preset: 'outlined', 
                color: 'customColor'
            }
        ]
    },
    {
        type: 'Text', 
        items: [
            {
                preset: 'text', 
                color: 'primary'
            }, {
                preset: 'text', 
                color: 'secondary'
            }, {
                preset: 'text', 
                color: 'customColor'
            }
        ]
    },
    {
        type: 'Icon-Button', 
        items: [
            {
                preset: 'icon', 
                color: 'primary', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }, {
                preset: 'icon', 
                color: 'secondary', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }, {
                preset: 'icon', 
                color: 'customColor', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }
        ]
    },
    {
        type: 'Icon-Inverted', 
        items: [
            {
                preset: 'icon-inverted', 
                color: 'primary', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }, {
                preset: 'icon-inverted', 
                color: 'secondary', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }, {
                preset: 'icon-inverted', 
                color: 'customColor', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }
        ]
    },
    {
        type: 'Button with Icon', 
        items: [
            {
                preset: 'contained', 
                color: 'primary', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'person', 
                    size: 16 
                }
            }, {
                preset: 'outlined', 
                color: 'secondary', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'person', 
                    size: 16 
                }
            }, {
                preset: 'text', 
                color: 'customColor', 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'person', 
                    size: 16 
                }
            }
        ]
    },
    {
        type: 'Sizes', 
        items: [
            {
                color: 'primary', 
                size: 'sm'
            }, {
                color: 'secondary', 
                size: 'md'
            }, {
                color: 'customColor', 
                size: 'lg'
            }
        ]
    },
    {
        type: 'WithShadow', 
        items: [
            {
                preset: 'icon-inverted', 
                color: 'primary', 
                shadow: 1, 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }, {
                preset: 'icon-inverted', 
                color: 'secondary', 
                shadow: 2, 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }, {
                preset: 'icon-inverted', 
                color: 'customColor', 
                shadow: 3, 
                iconProps: { 
                    iconClass: 'material-icons', 
                    iconName: 'add' 
                }
            }
        ]
    }
];

export default buttonsConfig;