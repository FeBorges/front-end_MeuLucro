import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/pages/login.css';
import '../styles/components/formLogin.css';

import logoImg from '../images/logo_meulucro.svg';
import stylesButton from '../styles/colors/button.module.css';
import colors from '../styles/colors/colors.module.css';


function Login() {
  return (
    <div id="page-login">
      <div className="left">
        <div className="content-wrapper">
          <img className="logoImg" src={logoImg} alt="" />
          <main>
            <h1>Bem-vindo(a) ao meu lucro</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in neque iaculis, imperdiet turpis ut, iaculis erat. Pellentesque tempor quam risus, id pharetra magna pretium sed. Ut lobortis feugiat diam non interdum. Cras bibendum dictum metus eu suscipit. Proin quis ex arcu. </p>
          </main>
          <div className="footer">
            <span className="footerLogin">© meulucro 2020</span>
            <div className="footerLinks">
              <span className="footerBtLinks">Termos de Uso</span>
              <span className="footerBtLinks">Política de privacidade</span>
              <span className="footerBtLinks">Contato</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="content-wrapper">
          <h1 className={colors.purple}>Faça seu login</h1>
          <p className={colors.grey}>Gestão Inteligente de Custos</p>
          <form className="login-form">
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                placeholder="Entre com seu nome"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Entre com seu nome"}
              />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Entre com seu email"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Entre com seu email"}
              />
            </div>
            <div className="sectionSubmit">
            <button className={stylesButton.bigblue} type="submit">
              Login
            </button>
            <span className="formForget">Esqueceu sua senha? <Link to="/teste" className="btCreatePassword">Gerar nova senha</Link></span>
            </div>
          </form>
            <button className={stylesButton.bigblue}  type="submit">
            Criar nova conta
            </button>

        </div>

      </div>
    </div>
  );
}

export default Login;