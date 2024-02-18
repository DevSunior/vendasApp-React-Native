import styled from "styled-components/native";

interface ContainerButtonProps {
    margin?: string;
};

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    ${(props) => ( props.margin ? `margin: ${props.margin};` : '')}

    background-color: blue;
`;