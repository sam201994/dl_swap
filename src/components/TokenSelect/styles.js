import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 7px 4px 4px;
  gap: 8px;

  background: #141822;
  border-radius: 24px 6px 6px 24px;
  cursor: pointer;
`;

export const DowpDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #141822;
  width: 200px;
  border-radius: 10px;
  z-index: 2;

  position: absolute;
  overflow-y: scroll;
  max-height: 300px;

  left: 0;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #141822;
  cursor: pointer;
  width: 100%;
  padding: 10px;
`;

export const OptionRightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
