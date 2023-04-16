import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e54b;
  border-radius: 14px;
  width: 100%;
  height: 50px;
  filter: ${props => (props.loader ? "brightness(40%)" : "brightness(100%)")};
  cursor: ${props => (props.loader ? "default" : "pointer")};
`;

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  filter: ${props => (props.loader ? "brightness(40%)" : "brightness(100%)")};
  cursor: ${props => (props.loader ? "default" : "pointer")};
`;
export { ButtonWrapper, IconButtonWrapper };
