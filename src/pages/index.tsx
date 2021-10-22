import Router from "next/router";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";

import styles from "./home.module.scss"

export default function Home() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');


  function handleAuth(event: FormEvent) {
    
    event.preventDefault();

    if(login.trim() !== "admin"){
      return alert("usuário inválido");
    }
    if(pass.trim() !== "123"){
      return alert("Senha incorreta")
    }


    
    Router.push("/cadastrar")
    return;
  }

  return (
    <div className={styles.zi}>
    <main className={styles.mainContent}>
      <div>
        <h1>Bem-Vindo ao gerenciador de produtos</h1>
        <h3>By Eduardo</h3>
      </div>

    <form 
      className={styles.formContainer}
      onSubmit={handleAuth}
    >
      <h2>Login</h2>


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
    </div>
  )
}
