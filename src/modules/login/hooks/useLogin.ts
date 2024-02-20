import axios from "axios"
import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

export const useLogin = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setEerrorMessage] = useState<string>('')

    const handleOnPress = async () => {
        setLoading(true)
        await axios.post('http://192.168.1.29:8080/auth', {
            email,
            password
        }).catch(() => {
            setEerrorMessage('Usuário ou senha inválidos.')
        });
        setLoading(false)
    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEerrorMessage('')
        setEmail(event.nativeEvent.text)
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEerrorMessage('')
        setPassword(event.nativeEvent.text)
    };

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword
    }
    
}