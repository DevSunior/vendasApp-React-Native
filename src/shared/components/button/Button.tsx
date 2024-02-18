import { TouchableOpacityProps } from "react-native/types"
import { ContainerButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    margin?: string
}

const Button = ({title, margin, ...props}: ButtonProps) => {

    return (
        <ContainerButton
        margin={margin}
        {...props}
        >
            <Text
            color={theme.colors.neutralTheme.white}
            type={textTypes.TITLE}
            >
                {title}
            </Text>
        </ContainerButton>
    )

}

export default Button;