import styles from './styles.module.scss'

// interface ProductProps {
//     table: {
//     id: number;
//     name: string;
//     nameProduct: string;
//     fileImg?: string;
//     createdAt?: string;
//     description?: string;
//     }
// }

// interface tableProsp {
//     table: table<ProductProps>;
// }



export function CardProduct(table){

    const products = table.table
    

    return(
                <>
            <h1 className={styles.agaum}>Produtos cadastrados e gerado o QrCode</h1>

         <div>
         {
                products.map(element => {
                return (<div className={styles.container}>
                <article>
                <h4>Nome do produto:</h4>
                <span>{element.nameProduct || "default"}</span>
                </article>
                
                <article>
                <h4>Descrição</h4>
                <p>{element.description || "default"}</p>
                </article>
    
    
                <article>
                    <h4>Nome do autor :</h4>
                    <span>{element.name || "default"}</span>
                </article>
    
    
                <article>
                    <h4>id</h4>
                    <span>{element.id || "default"}</span>
                </article>
    
                <article>
                    <h4>Data</h4>
                    <span>{element.createdAt || "default"}</span>
                </article>
    
                <article>
                    <button>Ver mais</button>
                </article>
                
                
            </div>
                )})
                
            
        }
         </div>
        </>
        
    )
} 


// {
//     table.map(element => {
//         <div className={styles.container}>
//     <article>
//     <h4>Nome do produto:</h4>
//     <span>{element.name}</span>
//     </article>
    
//     <article>
//     <h4>Descrição</h4>
//     <p>{element.description}</p>
//     </article>


//     <article>
//         <h4>Nome do autor :</h4>
//         <span>{element.name}</span>
//     </article>


//     <article>
//         <h4>id</h4>
//         <span>{element.id}</span>
//     </article>

//     <article>
//         <h4>Data</h4>
//         <span>{element.createdAt}</span>
//     </article>

//     <article>
//         <button>Ver mais</button>
//     </article>
    
    
// </div>
//     })
// }