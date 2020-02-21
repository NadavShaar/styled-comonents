import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledLoader = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color || props.theme.colors.secondary};
`;

function Loader(props) {
    
    const { size, color, isLoading, ...rest } = props;

    if(!isLoading) return null;

    const selectedSize = (() => {
        switch (size) {
            case 'sm': return 20;
            case 'md': return 40;
            case 'lg': return 60;
            default: return size;
        }
    })();
    

    return (
        <StyledLoader color={color} >
            <CircularProgress color='inherit' size={ selectedSize } { ...rest } />
        </StyledLoader>
    )
}

Loader.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
    ])
};
  
Loader.defaultProps = {
    size: 40
};

export default withTheme(Loader);