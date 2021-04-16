import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
export const Body = styled.div`
  width: 90%;
  display: flex;
  /* height: 600px; */
  margin: 0 auto;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    display: flex;
    align-self: flex-start;
    text-align: left;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 12.5rem;
    margin-bottom: 1.5rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px 30px;
  label {
    display: inline-block;
    align-items: center;
    text-align: right;
  }
  input,
  select {
    /* margin-top: -9px; */
    margin-left: 1rem;
    width: 20rem;
    outline: none;
    background: #ffffff;
    border: 0.5px solid #cccccc;
    box-sizing: border-box;
    border-radius: 5.33528px;
    padding: 10px;
    margin-bottom: 1.4rem;
  }
`;
export const ButtonContainer = styled.div`
  width: 50%;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 50%;
    background: #2193eb;
    border-radius: 8px;
    padding: 10px 12px;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    outline: 0;
    cursor: pointer;
    color: white;
    border: 0;
    font-weight: bold;
    letter-spacing: 0.5px;
    transition: all 0.6s;
    &:hover {
      background-color: #035ea3;
    }
    &:nth-child(2) {
      background: #ffffff;
      border: 1px solid #cccccc;
      box-sizing: border-box;
      border-radius: 8px;
      color: #2193eb;
      &:hover {
        border: 1px solid #2193eb;
        color: #035ea3;
      }
    }
  }
`;
