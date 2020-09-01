import styled from "styled-components";

export const Container = styled.div`
  background: #e1e1e1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelTitle = styled.h1`
  color: #ffd11a;
  font-weight: 700;
`;

export const CardItem = styled.div`
  font-size: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardItemTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;

export const stylesLine = {
  card: { width: 700, height: 500 },
  headStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyStyle: {
    height: "420px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
