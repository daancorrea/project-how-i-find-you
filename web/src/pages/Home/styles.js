import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  width: 80vw;
  background: #d5d5d5;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    gap: 20px;
    transition: 0.3s;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      transition: 0.3s;
      @media (max-width: 1640px) {
        transition: 0.3s;
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
      }
      button {
        background: none;
        border: none;
      }
      span {
        font-family: "Material Icons";
        font-size: 30px;
        cursor: pointer;
        @media (max-width: 1640px) {
          transition: 0.3s;
          font-size: 60px;
        }
        @media (max-height: 920px), (max-width: 500px){
          font-size:40px;
        }
      }
      .close {
        :hover {
          transition: 0.3s;
          color: #fc0000;
        }
      }
      .done {
        :hover {
          transition: 0.3s;
          color: #0bdd00;
        }
      }
    }
    @media (max-width: 1640px) {
      display: flex;
      flex-direction: column;
      transition: 0.3s;
    }
    @media (max-height: 920px) {
      overflow: auto;
      transition: 0.4s;
    }
  }
`;
export const ButtonAddNewContact = styled.div`
  cursor: pointer;
  background: rgba(44, 44, 44, 0.5);
  width: 300px;
  min-height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  :hover {
    transition: 0.3s;
    opacity: 0.9;
  }
  :active {
    transition: 0.3s;
    opacity: 0.6;
  }
  .image {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  p {
    font-size: 26px;
  }
`;
export const Label = styled.label`
  font-size: 18px;
`;
export const ErrorMessage = styled.p`
  margin: -29px 0 29px 0;
  color: #ef1313;
`;
export const Input = styled.input`
  @media (max-height: 920px), (max-width: 500px) {
    transition: 0.4s;
    overflow: auto;
    height: auto;
    width: auto;
  }
  width: 342px;
  height: 58px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: ${(props) => (props.error ? `1px solid #ef1313` : `none`)};
  margin: 10px 0 34px 0;
  outline: none;
  padding-left: 25px;
  font-size: 18px;
  line-height: 28px;
`;
export const CardContainer = styled.div`
  overflow: auto;
  width: 100%;
  max-height: 50%;
  overflow-x: hidden;
  @media (max-width: 1240px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  @media (max-width: 930px) {
    display: grid;
    grid-template-columns: 1fr;
    width: auto;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 30% 30% 30% 10%;
  align-items: center;
  padding: 0 20px;
  font-size: 25px;
  @media (max-width: 1240px) {
    display: none;
  }
`;
export const PName = styled.p`
  text-align: start;
`;
export const PEmail = styled.p`
  text-align: center;
`;
export const PNumber = styled.p`
  text-align: center;
`;
export const POptions = styled.p`
  text-align: end;
`;
export const Card = styled.div`
  width: 100%;
  height: 40px;
  background: rgba(0,0,0,0.1);
  margin: 5px;
  display: grid;
  grid-template-columns: 30% 30% 30% 10%;
  border-radius: 10px;
  align-items: center;
  padding: 0 20px;
  font-size: 20px;
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    align-items: flex-start;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
  }
`;
export const Button = styled.button`
  background: none;
  border: none;
  span {
    font-family: "Material Icons";
    font-size: 30px;
    cursor: pointer;
    :hover {
      transition: 0.3s;
      color: #fc0000;
    }
  }
`;
