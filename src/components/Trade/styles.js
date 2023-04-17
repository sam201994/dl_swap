import styled from "styled-components";

export const TradeWrapper = styled.div`
  box-sizing: border-box;
  width: 460px;
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 24px 24px;
  gap: 22px;

  position: relative;

  background: #1e1e1e;
  border-radius: 30px;
  z-index: -2;
`;

export const PercentageSection = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 10px;
`;

export const VectorWrapper = styled.div`
  position: absolute;
  width: 207px;
  height: 202px;
  background: linear-gradient(135deg, #e5e54b 2.88%, #ef5322 98.14%);
  filter: blur(109px);
  z-index: -1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  z-index: -3;
  border-radius: 30px;
  background: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #6b4e30 0%, rgba(183, 38, 38, 0) 100%),
    radial-gradient(80.38% 222.5% at -13.75% -12.36%, #e5e54b 0%, rgba(255, 255, 255, 0) 100%);

  padding: 2px;
`;
