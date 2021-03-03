import styled from "@emotion/styled";

const StyledButton = styled.button`
margin: auto;
background-color: #FFFFFF;
height: 2em;
color: ${props.color}
border: 1px solid ${props.color}
`;

function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button