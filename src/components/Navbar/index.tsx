import Router from "next/router";
import styles from './nav.module.scss'

export function Navbar(){
    
    
    return(
        <aside className={styles.menuNav}> 
            <button><img src="/logo-.png" alt="" /></button>
            <ul>
                <li onClick={() => Router.push("/cadastrar")}>Cadastro</li>
                <li onClick={() => Router.push("/products")}>Gerenciamento de Produtos</li>
            </ul>
        </aside> 
    );
}