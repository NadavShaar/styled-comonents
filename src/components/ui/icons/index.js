import React from 'react';
import BaseIcon from './parts/BaseIcon';

function Icon(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        default: return <BaseIcon { ...rest} />;
    }
};

export default Icon;