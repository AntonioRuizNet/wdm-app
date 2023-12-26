import styled from "styled-components";

export const Barra = styled.div`
  height: 30px;
  width: 300px;
  background: rgb(255, 255, 255);
  background: linear-gradient(${(props) => props.deg}deg, rgba(255, 255, 255, 1) ${(props) => props.valor}%, ${(props) => props.color} 0%);
  margin: 10px;
  border: 1px ${(props) => props.color} solid;
  padding: 5px 0px 0px 5px;
`;
