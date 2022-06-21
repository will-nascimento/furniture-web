import React from "react";
import BagIcon from "../../assets/icons/bag";
import { Body1medium } from "../../styles/general.styles";
import { Container, Hidden } from "./buttonLarge.style";
import { ButtonLargeProps } from "./buttonLarge.types";

export const ButtonLarge: React.FC<ButtonLargeProps> = (Props) => {
    const { title, iconPosition, variation, icon } = Props;
    const contentIcon = (icon? icon: <BagIcon />);
    const contentNone = ( 
        <Body1medium fontWeight={600}> 
        {title}
        </Body1medium>);
    const contentRight = (
        <>
            <Hidden />
            <Body1medium fontWeight={600}> 
            {title}
            </Body1medium>
            {contentIcon}
        </>
    );
    const contentLeft = (
        <>
            {icon? icon:<BagIcon />}
            <Body1medium fontWeight={600}> 
            {title}
            </Body1medium>
            <Hidden />
        </>
    );
    const contentCenterLeft = (
        <>
            {icon? icon:<BagIcon />}
            <Body1medium fontWeight={600} marginLeft={8 }> 
            {title}
            </Body1medium>
        </>
    );   
    const contentCenterRight = (
        <>
             <Body1medium fontWeight={600} marginRight={8}> 
            {title}
            </Body1medium>
            {icon? icon:<BagIcon />}
        </>
    );
    return (
        <Container
            title={title}
            iconPosition={iconPosition}
            variation={variation}
        >
            { iconPosition === 'none' && contentNone }
            { iconPosition === 'left' && contentLeft }
            { iconPosition === 'right' && contentRight }
            { iconPosition === 'centerLeft' && contentCenterLeft }
            { iconPosition === 'centerRight' && contentCenterRight }
        </Container>
    )
}