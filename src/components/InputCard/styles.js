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
  width: 50%;
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
`;

export const TagWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  gap: 8px;
  height: 23px;

  background: #141822;
  border: 0.5px solid #e5e54b;
  border-radius: 7px;
  cursor: pointer;
`;

export const RightSection = styled.div`
  display: flex;
`;
