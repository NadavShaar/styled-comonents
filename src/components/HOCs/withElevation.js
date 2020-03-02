import React from 'react';
import PropTypes from 'prop-types';

const elevations = {
    1: {boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"},
    2: {boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"},
    3: {boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},
    4: {boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"},
    5: {boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"},
}

const withElevation = (Component) => {
    return class Elevation extends React.Component {
        static propTypes = {
            elevation: PropTypes.number,
        }
        render(){
            const { elevation, style, ...rest } = this.props;
            return <Component style={{...style, ...elevations[elevation]}} { ...rest } />;
        }
    }
};

export default withElevation;