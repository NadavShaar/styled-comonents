import styled from 'styled-components';

const StyledAvatar = styled.div`
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    border-radius: 50%;
    background-image: ${props => props.isLoading ? '' : `url('${props.imgSrc}')`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: ${props => props.isLoading ? `${props.theme.skeleton.medium} !important` : 'unset'};
    ${props => props.styles};
`;

export const Avatar = StyledAvatar;