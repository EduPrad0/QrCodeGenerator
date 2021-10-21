import Router from "next/router";
import { useState } from 'react';
import styles from './nav.module.scss'
export function Navbar(){
    const[ativMenuNav, isAtivMenuNav] = useState(false);
    
    function handleNav(){
        isAtivMenuNav(!ativMenuNav)
    }

    return(
        <aside className={styles.menuNav} onClick={handleNav}> 
            <div>
                <article >
                    <img src="/menu.svg" alt="menu" /> 
                    <span>Menu</span>
                </article>


                <section className={ativMenuNav ? styles.sectionAparent : styles.none}>
                   <div>
                    <ul>
                        <li onClick={() => Router.push('/products')}>Produtos</li>
                        <li onClick={() => Router.push('/cadastrar')}>Cadastro</li>
                        <li>Buscar</li>

                    </ul>
                   </div>
                </section>
            </div>
        </aside> 
    );
}