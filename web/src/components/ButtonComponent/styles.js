import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-size: 18px;
  margin: ${(props) => (props.register ? `40px 0 10px 0` : `10px 0`)};
  color: #ffffff;
  background: #2c2c2c;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transition: 0.2s;
  }
  :active {
    opacity: 0.6;
    transition: 0.2s;
  }
`;
