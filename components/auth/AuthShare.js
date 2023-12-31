import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px 7px;
  margin-bottom: 8px;
  border-radius: 4px;
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${(props) => (props.lastOne ? "15" : "8")}px;
`;
