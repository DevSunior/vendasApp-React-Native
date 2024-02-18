import { TextInputProps } from "react-native/types";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/theme";

interface InputProps extends TextInputProps {
    title?: string,
    errorMessage?: string
}

const Input = ({title, errorMessage, ...props}: InputProps) => {

    return (
        <DisplayFlexColumn>
            {title && (
                <Text
                margin="0px 0px 4px 8px"
                color={theme.colors.grayTheme.gray100}
                type={textTypes.PARAGRAPH_SMALL_BOLD}
                >
                    {title}
                </Text>
            )}
            <ContainerInput
            {...props}
            isError={!!errorMessage}
            />
            {errorMessage && (
                <Text
                margin="0px 0px 0px 8px"
                color={theme.colors.orangeTheme.orange80}
                type={textTypes.PARAGRAPH_SMALL_BOLD}
                >
                    {errorMessage}
                </Text>
            )}
        </DisplayFlexColumn>
    )
}

export default Input;