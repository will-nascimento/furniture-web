import React from "react";
import colors from "../../styles/colors";

const Calendar = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 20, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" color="none">
        <path d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H9V5H15V3H17L17 5C19.2091 5 21 6.79086 21 9V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V9C3 6.79086 4.79086 5 7 5V3ZM15 7V9H17L17 7C18.1046 7 19 7.89543 19 9V11H5V9C5 7.89543 5.89543 7 7 7V9H9V7H15ZM5 13H19V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V13Z" fill={color}/>
        </svg>
        
    )
}
export default Calendar;
