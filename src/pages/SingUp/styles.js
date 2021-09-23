import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 0%;
  margin:0%;
`;

export const ContainerFooter = styled.div`
  position: absolute;
  bottom: 0;
  font-family: 'Google Sans', sans-serif; 
  background-color: #34495e;
  height: 3%;
  width: 100%;
  margin:0px;
  text-align: right;
  padding-top: 10px;
  color: #fff;
  font-size: 11px
`;

export const Form = styled.form`
  font-family: 'Open Sans', sans-serif;
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #34495e;
  border-radius: 10px;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 40px;
    margin-bottom: 15px;
    padding: 15px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid  #34495e;
    border-radius: 5px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #34495e;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #eee;
  font-family: 'Open Sans', sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
  padding: 0px;
}
`;