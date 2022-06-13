import { generalStyleProps } from "../../types/general.types";

export interface ButtonLargeProps extends generalStyleProps {
    variation: 'primary' | 'secondary' | 'ghost',
    icon?: Element, 
    iconPosition: 'none' | 'left' | 'right' | 'centerLeft' | 'centerRight',
    title?: string,
    border?: string,
    outline?: boolean,
}