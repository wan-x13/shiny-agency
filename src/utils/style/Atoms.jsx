import colors from "./color";
import styled ,{keyframes} from "styled-components";

const rotate = keyframes`
   from{
    transform : rotate(0deg)
   }
   to{
    transform : rotate(360deg)
   }
`;

export const Loader = styled.div`
        padding : 1Opx;
        border : 6px solid ${colors.primary};
        border-bottom-color: transparent;
        border-radius: 50px;
        animation : ${rotate} 1s infinite linear;
        height: 0;
        width: 0;

`;