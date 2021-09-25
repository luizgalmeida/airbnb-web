import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0px;
  background:#202020;
  position: absolute;
  top: 0;
  left: 0;
  ul{
    list-style:none;
  }
  li{
    flex: 1;
    margin-bottom: 15px;
    padding: 15px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid  #1abc9c;
    border-radius: 5px;
    list-style:none;
  }
  span{
    color: #1abc9c;
  }
`;

export const ContainerFooter = styled.div`
  position: absolute;
  bottom: 0;
  font-family: 'Google Sans', sans-serif; 
  background-color: #1abc9c;
  height: 3%;
  width: 100%;
  margin:0px;
  text-align: center;
  padding-top: 10px;
  color: #fff;
  font-size: 11px;
  background:#202020;
`;

export const TextViewSimple = styled.div`
  height: 40px;
  border: 0;
  text-align: center;
  h1{
    color: #1abc9c;
    font-size: 23px;
    font-weight:bold;
    
  }
`;
export const ButtonLogout = styled.div`
position: absolute;
top: 0;
right: 0;
height:50px;
width: 50px;
border-radius: 100px;
border-color: #fff;
background: #1abc9c;
margin:10px;
text-align: center;
transition:0.3s;  
:hover{
  background: #202020;
  transition:0.3s;
}
img{
  margin-top:25%;
}
`;

export const Form = styled.form`
  font-family: 'Open Sans', sans-serif;
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #1abc9c;
  border-radius: 10px;
  background:#202020;
  margin: 50px;
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
    border: 1px solid  #1abc9c;
    border-radius: 5px;
    &::placeholder {
      color: #999999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #1abc9c;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition:0.3s;
  }  
  button:hover{
    background: #303030;
    transition:0.3s;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  h2{
    margin: 10px;
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
  background:#202020;
  color:#fff;
}

`;