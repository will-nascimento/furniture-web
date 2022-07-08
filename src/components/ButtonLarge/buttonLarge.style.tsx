import styled from "styled-components";
import Calendar from "../../assets/icons/calendar";
import colors from "../../styles/colors";
import { ButtonLargeProps } from "./buttonLarge.types";

export const BackgroundColor: Record<ButtonLargeProps['variation'], string> = {
    primary: colors.yellow500,
    secondary: colors.gray100,
    ghost: colors.transparent,
    outline: colors.white,
};

export const AlignItems: Record<ButtonLargeProps['iconPosition'], string> = {
    none: 'center',
    left: 'space-between',
    right: 'space-between',
    centerLeft: 'center',
    centerRight: 'center',
};

export const JustifyContent: Record<ButtonLargeProps['iconPosition'], string> = {
    none: 'center',
    left: 'space-between',
    right: 'space-between',
    centerLeft: 'center',
    centerRight: 'center',
};

export const Container = styled.button<ButtonLargeProps>` 
    display: flex;
    background-color: ${(props) => BackgroundColor[props.variation] || colors.transparent};
    justify-content: ${(props) => JustifyContent[props.iconPosition] || 'center'};
    align-items: ${(props) => AlignItems[props.iconPosition] || 'center'} ;
    width: ${props => props.width || 100}%;
    border: ${props => props.variation = 'outline'};
    padding: 20px 16px;
    border-radius: 8px;
    cursor: pointer;
`;

export const Hidden = styled.div`
    width: 24px;
    height: 24px;
`;
