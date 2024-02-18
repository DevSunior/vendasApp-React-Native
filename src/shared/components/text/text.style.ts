import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string,
    fontSize: string,
    fontFamily: string
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.color ? `color: ${props.color};` : '' )}
    font-size: ${(props) => (props.fontSize)};
    font-family: ${(props) => (props.fontFamily)};
    padding-top: 5px;
`