import styled from 'styled-components';
import { Switch as MUISwitch} from '@material-ui/core';

const Switch = styled(MUISwitch)`
    ${props => props.styles}
`;

export default Switch;