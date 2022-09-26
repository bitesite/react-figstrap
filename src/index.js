import styled, { css } from "styled-components";

const Frame = styled.div`
  display: flex;
  ${(props) => {
    if (props.vertical) {
      return css`
        flex-direction: column;
      `;
    }
  }}
  box-sizing: border-box;
  gap: ${(props) => `${props.gap ? props.gap : "0"}px`};
  padding: ${(props) => `${props.padding ? props.padding : "0"}px`};
  align-items: ${(props) =>
    `${props.alignItems ? props.alignItems : "stretch"}`};
  justify-content: ${(props) =>
    `${props.justifyContent ? props.justifyContent : "flex-start"}`};
`;

export { Frame };
