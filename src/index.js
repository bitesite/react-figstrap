import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  gap: ${(props) => `${props.gap ? props.gap : "0"}px`};
  padding: ${(props) => `${props.padding ? props.padding : "0"}px`};
  align-items: ${(props) =>
    `${props.alignItems ? props.alignItems : "stretch"}`};
  justify-content: ${(props) =>
    `${props.justifyContent ? props.justifyContent : "flex-start"}`};
`;

export { Frame };
