import React from "react";
import BagIcon from "../../assets/icons/bag";
import { Container, Hidden } from "./buttonLarge.style";
import { ButtonLargeProps } from "./buttonLarge.types";

export const ButtonLarge: React.FC<ButtonLargeProps> = (Props) => {
    const { title, iconPosition, variation, icon, outline } = Props;
    const contentNone = (title);
    const contentRight = (
        <>
            <Hidden />
            {title}
            <BagIcon />
        </>
    );
    const contentLeft = (
        <>
            <BagIcon />
            {title}
            <Hidden />
        </>
    );
     const contentCenterRight = (
        <div className="center">
            {title}
            <BagIcon />
        </div>
    );
    const contentCenterLeft = (
        <div className="center">
            <BagIcon />
            {title}
        </div>
    );   
    return (
        <Container
            title={title}
            iconPosition={iconPosition}
            variation={variation}
            // icon={icon}
            // outline={outline}
        >
            {/* {title} */}
            { iconPosition === 'none' && contentNone }
            { iconPosition === 'left' && contentLeft }
            { iconPosition === 'right' && contentRight }
            { iconPosition === 'centerLeft' && contentCenterLeft }
            { iconPosition === 'centerRight' && contentCenterRight }

            <BagIcon />
        </Container>
    )
}