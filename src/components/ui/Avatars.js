import styled from 'styled-components';
import PropTypes from 'prop-types';
import withShadow from '../HOCs/withShadow.js'

const StyledAvatar = styled.div.attrs(props => ({
    className: props.isLoading ? `${props.className} skeleton` : props.className
}))`
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    border-radius: 50%;
    background-image: ${props => `url('${props.imgSrc}')`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    position: relative;
    ${props => props.styles}
`;

StyledAvatar.propTypes = {
    size: PropTypes.number,
    imgSrc: PropTypes.string,
    styles: PropTypes.object
};
  
StyledAvatar.defaultProps = {
    size: 50,
    imgSrc: '',
    styles: {}
};

export const Avatar = withShadow(StyledAvatar);