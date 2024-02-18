import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";

const Login = () => {

    const handleOnPress = () => {
        console.log('clickado')
    }

    return (
        <View>
            <ContainerLogin>
                <Text>Login</Text>
                <Input/>
                <Button
                margin="15px"
                title="ENTRAR"
                type={theme.buttons.buttonsTheme.primary}
                onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    )
}

export default Login;