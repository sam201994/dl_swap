import styled from "styled-components";

export const InputWrapper = styled.div`
  box-sizing: border-box;
  background: #101010;
  border-radius: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 14px 18px;
  justify-content: space-between;
  align-items: center;
`;

export const InputSectionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 3px;
`;

export const TextInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  border: 0;
  color: white;
  font-size: 24px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
  &:hover {
  }
`;
