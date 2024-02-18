import { Text } from "react-native";
import { TouchableOpacityProps } from "react-native/types"
import { ContainerButton } from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    margin?: string
}

const Button = ({title, margin, ...props}: ButtonProps) => {

    return (
        <ContainerButton margin={margin} {...props}>
            <Text>{title}</Text>
        </ContainerButton>
    )

}

export default Button;