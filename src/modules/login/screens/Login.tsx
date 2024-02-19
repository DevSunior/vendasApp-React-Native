import { Text, View } from "react-native";
import { ContainerLogin, ImageLogo } from "../styles/login.style";
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
                <ImageLogo
                resizeMode="contain"
                source={require('../../../assets/images/logo.png')}
                />
                <Input
                title="Email:"
                placeholder="Digite seu email"
                margin="0px 0px 10px 0px"
                />
                <Input
                secureTextEntry
                title="Senha:"
                placeholder="Digite sua senha"
                />
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