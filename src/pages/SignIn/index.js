import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Form, Container,ContainerFooter } from "./styles";


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Usuário/senha inválidos ou não cadastrados"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Github logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Cadastre-se</Link>
        </Form>
        <ContainerFooter>
          <footer>Feito com ❤ por Luiz Gabriel de Almeida </footer>
        </ContainerFooter>
      </Container>
    );
  }
}

export default withRouter(SignIn);