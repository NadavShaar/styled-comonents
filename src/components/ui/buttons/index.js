import React from 'react';
import BaseButton from './parts/BaseButton';
import withColor from './../../HOCs/withColor';
import withShadow from './../../HOCs/withShadow';

function Button(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        default: return <BaseButton { ...rest} />;
    }
};

export default withShadow(withColor(Button));