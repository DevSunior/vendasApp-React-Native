import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { theme } from "../../themes/theme";

interface ContainerButtonProps {
    margin?: string;
};

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
    ${(props) => ( props.margin ? `margin: ${props.margin};` : '')}
    width: 100%;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    
`;

export const GradientButton = styled(LinearGradient)<ContainerButtonProps>`
    ${(props) => ( props.margin ? `margin: ${props.margin};` : '')}
    width: 100%;
    height: 100%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const SecondaryButton = styled(ContainerButton)<ContainerButtonProps>`
    ${(props) => ( props.margin ? `margin: ${props.margin};` : '')}
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
`;