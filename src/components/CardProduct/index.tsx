import router from 'next/router'
import styles from './styles.module.scss'

// interface table {
    
//     id: number;
//     name: string;
//     nameProduct: string;
//     fileImg?: string;
//     createdAt?: string;
//     description?: string;
    
// }

// interface tableProsp {
//     table: [table];
// }



export function CardProduct(table) {

    const products = table.table
    products.reverse()


    return (
        <>
            <h1 className={styles.agaum}>Produtos cadastrados e gerado o QrCode</h1>

            <div>
                <table className={styles.tableStyle}>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Descrição</th>
                        <th>Nome do Autor</th>
                        <th>ID</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                    
                {
                    products.map(element => {
                        return (
                            <tr className={styles.products}>
                                <td>{element.nameProduct}</td>
                                <td> <p>{element.description}</p> </td>
                                <td>{element.name}</td>
                                <td>{element.id}</td>
                                <td>{element.createdAt}</td>
                                <td><button onClick={() => router.push(`/item/${element.id}`)}>Ver mais</button></td>
                            </tr>
                            
                            
                            
                            
                            
                            
                            )
                        })
                        
                        
                    }
            
                </table>
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