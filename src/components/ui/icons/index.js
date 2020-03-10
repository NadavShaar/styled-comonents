import React from 'react';
import BaseIcon from './parts/BaseIcon';
import RoundIcon from './parts/RoundIcon';
import withElevation from './../../HOCs/withElevation';

function Icon(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        case 'round': return <RoundIcon { ...rest} />;
        default: return <BaseIcon { ...rest} />;
    }
};

export default withElevation(Icon);