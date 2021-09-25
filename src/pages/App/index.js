import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../services/api";
import { Form, Container,ContainerFooter, TextViewSimple, ButtonLogout, Lbl } from "./styles";
import { logout } from "../../services/auth";
import Logout from "../../assets/logout.png";
import PropTypes from "prop-types";


class App extends Component {
  state = {
    title: "",
    address: "",
    longitude: 0,
    latitude: 0,
    price:0
  };

  componentDidMount() {
  this.renderRepos();
}

renderRepos = async() => {
  try {
    const res = await api.get('/properties');
    const posts = res.data;

    this.setState({
      Posts: posts
    });
  } catch (err) {
    console.log(err);
  }
}
  handleApp = async e => {
    e.preventDefault();
    
    const {  title, address, longitude, latitude, price } = this.state;
      try {
        api.post("/properties", { title, address, longitude, latitude, price });
        alert("Repositório cadastrado com sucesso.")
      } catch (err) {
        this.setState({
          error:
            "Não foi possivel cadastrar o repositório."
        });
      }
  };

  handleLogout = async e => {
    logout();
    this.props.history.push("/");
  };

  render() {
      const posts = this.state.Posts?.map((post, i) => (
        
        <li key={i} className="list-group-item">
          <span>Autor:</span> {post.title}<br></br><span>Repo:</span> {post.address} 
        
        </li>
      ));
    return (
      <Container>  
        <ButtonLogout onClick={this.handleLogout}>
          <img src={Logout} alt="logout" />
        </ButtonLogout>   
        <Form onSubmit={this.handleApp}>
          <h2>Cadastre seu Repo!</h2>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Autor"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Endereço do git"
            onChange={e => this.setState({ address: e.target.value })}
          />
          <button type="submit" onSubmit={this.renderRepos()}>Cadastrar Repositório</button>
          <hr />
          </Form>
          <Form>
          <h2>Repositórios salvos</h2>
          <ul className="list-group list-group-flush">
          {posts}
          </ul>
          </Form>
        <ContainerFooter>
          <footer>Feito com ❤ por Luiz Gabriel de Almeida </footer>
        </ContainerFooter>
      </Container>
    );
  }
}

export default withRouter(App)

