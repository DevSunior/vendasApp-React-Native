import { TouchableOpacityProps } from "react-native/types"
import { ContainerButton, SecondaryButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    margin?: string,
    type?: string
}

const Button = ({title, margin, type, ...props}: ButtonProps) => {

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <SecondaryButton
                margin={margin}
                {...props}
                >
                    <Text
                    color={theme.colors.mainTheme.primary}
                    type={textTypes.BUTTON_REGULAR}
                    >
                        {title}
                    </Text>
                </SecondaryButton>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ContainerButton
                margin={margin}
                {...props}
                >
                    <Text
                    color={theme.colors.neutralTheme.white}
                    type={textTypes.BUTTON_BOLD}
                    >
                        {title}
                    </Text>
                </ContainerButton>
            )
    }

}

export default Button;