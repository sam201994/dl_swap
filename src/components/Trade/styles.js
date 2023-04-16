import styled from "styled-components";

export const TradeWrapper = styled.div`
  box-sizing: border-box;
  width: 464px;
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px 30px;
  gap: 22px;

  position: relative;

  background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(0, 0, 0, 0.2) 0%, rgba(4, 4, 4, 0) 100%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border: 2px solid;

  border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #e5e54b 0%, rgba(183, 38, 38, 0) 100%)
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(80.38% 222.5% at -13.75% -12.36%, #e5e54b 0%, rgba(255, 255, 255, 0) 100%)
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  border-radius: 30px;
`;

export const PercentageSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const VectorWrapper = styled.div`
  position: absolute;
  width: 207px;
  height: 202px;
  background: linear-gradient(135deg, #e5e54b 2.88%, #ef5322 98.14%);
  filter: blur(109px);
  z-index: -1;
`;
