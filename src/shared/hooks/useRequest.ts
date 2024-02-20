import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { setUserAction } from "../../store/reducers/userReducer";
import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";


export const useRequest = () => {
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);

        await connectionAPIPost<ReturnLogin>('http://192.168.1.22:8080/auth', body)
        .then((result) => {
            setUser(result.user)
        })
        .catch(() => {
            setModal({
                visible: true,
                title: 'Erro',
                text: 'Usuário ou senha inválidos.'
            })
        });

        setLoading(false);
    }

    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage
    }
}