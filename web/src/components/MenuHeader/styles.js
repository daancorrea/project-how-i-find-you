import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  background: #2c2c2c;
  border-radius: 14px 14px 0 0;
  flex-direction:row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  h1{
    @media (max-width:500px){
      font-size: 20px;
    }
    color: white;
  }
`;

export const ButtonGetOut = styled.p`
@media (max-width:500px){
      font-size: 16px;
    }
    color:#FFFFFF;
    font-size: 20px;
    cursor: pointer;
    :hover{
      transition: 0.3s;
      opacity: 0.9;
    }
    :active{
      transition: 0.3s;
      opacity: 0.6;
    }
`
