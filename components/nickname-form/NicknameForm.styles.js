import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  width: 300px;
  min-height: 200px;
`;

export const CloseButton = styled.div`
  display: flex;
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 38px;
  margin: 0px;
  text-align: center;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
`;

export const CardHeadline = styled.h1`
  font-size: 1.25rem;
  text-transform: capitalize;
`

export const SubmitButton = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 5px 20px;
  font-size: 1rem;
  background-color: aquamarine;
  border-radius: 5px;
  color: black;
  border: transparent;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FormLabel = styled.p`
  color: ${(props) => (props.invalid ? "red" : "black")};
  user-select: none;
  font-size: 14px;
  margin-bottom: 6px;
  text-align: center;
  align-self: center;
`;

export const TextInput = styled.input`
  border: ${(props) => (props.invalid ? "2px solid red" : "2px solid")};
  border-radius: 5px;
  width: 250px;
  padding: 5px;
`;