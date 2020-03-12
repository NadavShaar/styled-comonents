import React from 'react';
import BaseIcon from './parts/BaseIcon';
import RoundIcon from './parts/RoundIcon';
import withShadow from './../../HOCs/withShadow';

function Icon(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        case 'round': return <RoundIcon { ...rest} />;
        default: return <BaseIcon { ...rest} />;
    }
};

export default withShadow(Icon);