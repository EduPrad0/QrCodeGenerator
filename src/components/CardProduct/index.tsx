import router from 'next/router'
import styles from './styles.module.scss'


export function CardProduct(table) {
    console.log(table)
    const products = table.table
    products.reverse()


    return (
        <section className={styles.container}>
            <h1 className={styles.agaum}>Produtos cadastrados e gerado o QrCode</h1>

            <div>
                <table className={styles.tableStyle}>
                   <thead>
                    <tr>
                            <th>Cliente</th>
                            <th>Nº Serie</th>
                            <th>ID</th>
                            <th>Data</th>
                            <th></th>
                        </tr>
                   </thead>
                   <tbody>

                   
                    
                {
                    products.map(element => {
                        return (
                            <tr className={styles.products} key={element.id}>
                                <td>{element.cliente}</td>
                                <td>{element.nserie} </td>
                                <td>{element.id}</td>
                                <td>{element.createdat}</td>
                                <td><button onClick={() => router.push(`/item/${element.id}`)}>Ver mais</button></td>
                            </tr>
                            
                            )
                        })
                        
                        
                    }
                    </tbody>
                </table>
        </div>
        </section>

    )
}
