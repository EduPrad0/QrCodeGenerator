import Router from "next/router";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";

import styles from "./home.module.scss"

export default function Home() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');


  function handleAuth(event: FormEvent) {
    
    event.preventDefault();

    if(login.trim() !== "edugatinho"){
      return alert("Eae carinha, aparentemente vc errou kkkkkk, aperta f12 e vê ai")
    }
    if(pass.trim() !== "123"){
      return alert("Me ajuda ai meu fiii, a senha é mó fácil")
    }


    
    Router.push("/cadastrar")
    return;
  }

  return (
    <main className={styles.mainContent}>
      <div>
        <h1>Bem-Vindo a essa aplicação maravilhosa</h1>
        <h3>Logicamente criada por mim, Eduardo Prado</h3>
      </div>

    <form 
      className={styles.formContainer}
      onSubmit={handleAuth}
    >
      <h2>Faz o login ai meu chapa, vamos ver se você tem o acesso mesmo</h2>


      {/* <label htmlFor="texto">Login</label> */}
      <input 
        placeholder="Login"
        id="texto"
        type="text" 
        value={login}
        onChange={event => setLogin(event.target.value)}
      />

      {/* <label htmlFor="senha"></label> */}
      <input 
        placeholder="Password"
        id="senha"
        type="password" 
        value={pass}
        onChange={event => setPass(event.target.value)}
      />

     
     <Button name={"Submit"}/>
    
    </form>
    </main>
  )
}
