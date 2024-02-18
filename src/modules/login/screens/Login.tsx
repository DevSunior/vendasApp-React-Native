import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";

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
                onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    )
}

export default Login;