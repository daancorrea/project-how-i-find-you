import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background: #d5d5d5;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  .image {
    margin-bottom: 20px;
  }
  .return{
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: ${(props) => (props.error ? `1px solid #ef1313` : `none`)};
  margin: ${(props) =>
    props.passwordConfirm ? `-18px 0 34px 0` : ` 10px 0 34px 0`};
  outline: none;
  padding-left: 25px;
  font-size: 18px;
  line-height: 28px;
`;
export const Label = styled.label`
  font-size: 18px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin: 0 0 20px 0;
`;
export const P = styled.p`
  margin: 20px 0 40px 0;
  font-size: 18px;
  text-align: center;
`;
export const ErrorMessage = styled.p`
  margin: -29px 0 29px 0;
  color: #ef1313;
`;
export const RegisterP = styled.p`
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  margin-left: 4px;
  :hover {
    opacity: 0.9;
    transition: 0.2s;
  }
  :active {
    opacity: 0.6;
    transition: 0.2s;
  }
`;