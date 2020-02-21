import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { LeftSidebar } from '../ui/Sidebar';
import { Avatar } from '../ui/Avatar';
import IconsList from '../ui/IconsList';
import Icon from '../ui/Icons';
import Button from '../ui/Buttons';

const Header = styled.div`
    width: 100%;
    height: 260px;
    position: relative;
`;

const Banner = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 60px 20px 20px;
`;

function Info(props) {

    const [isOpen, toggleOpen] = useState(true);
    const [target, setTarget] = useState(null);

    useEffect(() => {
        props.getTarget().then(res => {
            setTarget(res);
        })
    }, [props]);

    return (
        <LeftSidebar 
            size={420} 
            isOpen={isOpen} 
            onClose={() => toggleOpen(false)}
        >
            {
                !target ? 
                    null
                    :
                    <Header>
                        <Banner src={target.image} />
                        <Avatar 
                            onClick={e => toggleOpen(!isOpen)}
                            size={84} 
                            imgSrc={target.avatar}
                            styles={{position: 'absolute', top: 108, left: 18, border: '2px solid #fff', backgroundColor: '#fff'}}
                        />
                        <IconsList 
                            visibleCount={5} 
                            styles={{fontSize: 16, position: 'absolute', top: 160, left: 120}} 
                            countStyle={{marginLeft: 4, lineHeight: '20px', color: props.theme.colors.secondary}} 
                        >
                            {target.socialNetworks.map((sn, idx) => (
                                <Icon 
                                    key={idx}
                                    preset='social'
                                    iconClass={sn.iconClass} 
                                    iconName={sn.iconName} 
                                    wrapperSize={20} 
                                    size={14} 
                                    color={sn.color} 
                                    styles={{marginRight: 5}} 
                                />
                            ))}
                        </IconsList>
                        {/* <Icon 
                            // as="span"
                            preset='gender'
                            gender={target.gender} 
                            iconSize={20} 
                            color={'red'} 
                        /> */}
                        <ButtonsWrapper>
                            <Button 
                                iconProps={{ iconClass:'material-icons', iconName:'assignment', size: 14, styles: {marginRight: 8} }} 
                                styles={{marginRight: 10}}
                            >Automatic Report
                            </Button>
                            <Button 
                                preset='outline'
                                iconProps={{ iconClass:'material-icons', iconName:'work_outline', color: props.theme.colors.secondary, size: 16, styles: {marginRight: 8} }}
                            >Add
                            </Button>
                            {/* <Button 
                                preset='animate'
                                size={30}
                                fullWidth={115}
                                color='#ff2799'
                                // labelStyles={{fontSize: 20}}
                                // labelContainerStyles={{borderRadius: 4}}
                                // buttonStyles={{borderRadius: 4}}
                                iconProps={{ iconClass:'material-icons', iconName:'add', color: props.theme.colors.color1, size: 18 }}
                            >Animated
                            </Button> */}
                        </ButtonsWrapper>
                    </Header>
            }
        </LeftSidebar>
    )
}

export default withTheme(Info);