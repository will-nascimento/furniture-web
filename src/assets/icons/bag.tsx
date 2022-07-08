import React from "react";
import colors from "../../styles/colors";

const BagIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 20, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 16 20" color="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.79086 0 4 1.79086 4 4V5H3C1.34315 5 0 6.34315 0 8V17C0 18.6569 1.34315 20 3 20H13C14.6569 20 16 18.6569 16 17V8C16 6.34315 14.6569 5 13 5H12V4C12 1.79086 10.2091 0 8 0ZM10 7V9H12V7H13C13.5523 7 14 7.44772 14 8V17C14 17.5523 13.5523 18 13 18H3C2.44772 18 2 17.5523 2 17V8C2 7.44772 2.44772 7 3 7H4V9H6V7H10ZM10 5V4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V5H10Z" fill={color} />
        </svg>
    )
}
export default BagIcon;
