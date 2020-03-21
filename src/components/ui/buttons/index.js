import React from 'react';
import BaseButton from './parts/BaseButton';
import IconButton from './parts/IconButton';
import withColor from './../../HOCs/withColor';
import withShadow from './../../HOCs/withShadow';

function Button(props) {
    const { preset, variant, ...rest } = props;

    switch (preset) {
        case 'icon-inverted': return <IconButton inverted { ...rest} />;
        case 'icon': return <IconButton { ...rest} />;
        case 'text': return <BaseButton variant='text' { ...rest} />;
        case 'outlined': return <BaseButton variant='outlined' { ...rest} />;
        default: return <BaseButton variant='contained' { ...rest} />;
    }
};

export default withShadow(withColor(Button));