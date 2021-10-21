import { PrismaClient } from ".prisma/client";
import styles from './item.module.scss'

interface InfProductProps{
    createdAt?: string;
    description?: string;
    fileImg?: string;
    name: string;
    nameProduct: string;
}

function Produtos(table: InfProductProps){
  

   return (
        <>
            
            <main className={styles.Container}>
                <div>
                    <img src="/defaultImg.png" alt="" />
                </div>
                <div>
                    <article>
                        <h1>Nome do Produto : </h1>
                        <h4>{table.name}</h4>
                    </article>

                    <article>
                        <h1>Descrição </h1>
                        <h4>{table.description}</h4>
                    </article>

                    <article>
                        <h1>Criada em : </h1>
                        <h4>{table.createdAt}</h4>
                    </article>

                    <article>
                        <h1>Nome do Autor: </h1>
                        <h4>{table.name}</h4>
                    </article>


                </div>
            </main>
        </>
    )
}

export default Produtos;


export async function getServerSideProps({ params }){
   const prisma = new PrismaClient()
    const table  = await prisma.products.findUnique(
        {where: { 
            id: Number(params.id),
        }}
    )

    return {
       props:  table  
      
    }
    
    
  }
  

