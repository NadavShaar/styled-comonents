import styled from 'styled-components';

const StyledSidebar = styled.div`
    height: 100%;
    width: ${props => { return (props.size || 350) + 'px'}};
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
    position: absolute;
    top: 0px;
    bottom: 0px;
    ${props => props.styles};
`;

export const LeftSidebar = styled(StyledSidebar)`
    left: 0px;
`;

export const RightSidebar = styled(StyledSidebar)`
    right: 0px;
`;