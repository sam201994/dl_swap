import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  height: 54px;
  filter: ${props => (props.loader ? "brightness(40%)" : "brightness(100%)")};
  cursor: ${props => (props.loader || props.disabled ? "default" : "pointer")};
  background: ${props => (props.disabled ? "rgb(179 172 153)" : "#e5e54b;")};

  width: calc(100% - 12px);
`;

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  filter: ${props => (props.loader ? "brightness(40%)" : "brightness(100%)")};
  cursor: ${props => (props.loader ? "default" : "pointer")};
`;
export { ButtonWrapper, IconButtonWrapper };
