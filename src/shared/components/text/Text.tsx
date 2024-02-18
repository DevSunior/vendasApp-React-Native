import { TextProps as TextPropsNative } from "react-native/types";
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface Textprops extends TextPropsNative {
    color?: string;
    type?: string
}

const Text = ({color, type, ...props}: Textprops) => {

    const handleFontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '30px'
            default:
                return '15px';
        }
    }, [type])
    
    return (
        <ContainerText
        color={color}
        fontSize={handleFontSize}
        {...props}
        />
    )
}

export default Text;