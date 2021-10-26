import { PrismaClient } from ".prisma/client";
import styles from './item.module.scss'
var QRCode = require('qrcode.react');

interface InfProductProps{
    id: Number,
  createdat          : String, 
  anofabricacao      : String, 
  normaaplicavel     : String, 
  cliente            : String, 
  projeto            : String, 
  ndefabricacao      : String, 
  freqnominal        : String, 
  classetensao       : String, 
  altitude           : String, 
  tensaoalimentacao  : String, 
  temperaturaambiente: String, 
  tensaocomando      : String, 
  grauprotecao       : String, 
  correntenominal    : String, 
  peso               : String, 
  simetrica          : String, 
  nserie             : String, 
}

function Produtos(table: InfProductProps){
  
    const code = `https://qrcodeapp-edu-card.herokuapp.com//item/${table.id}`
   return (
        <>
            
            <section className={styles.Container}>
                <article className={styles.header}>
                    <img src="/logo-.png" alt="logo" />
                    <QRCode value={code} />
                    <ul>
                        <li>R. Maestro Manoel Vitórino dos Santos, 561</li>
                        <li>Granja Viana - 06707-200 - Cotia-SP</li>
                        <li>Fone : 55 11 4702-0505</li>    
                        <li>Sac - sac@neopro.ind.br</li>    
                        <li>www.neopro.ind.br</li>    
                    </ul>
                </article>
                <div>
                    <div>
                        <h4>Ano de fabricação:⠀⠀⠀⠀ </h4>
                        <span className={styles.bloquinho}>{table.anofabricacao}</span>
                    </div>


                    <div>
                        <h4>Norma Aplicavel:⠀⠀⠀⠀⠀⠀ </h4>
                        <span className={styles.bloquinho}>{table.normaaplicavel}</span>
                    </div>
                </div>

                <div>
                        <h4>Cliente:  </h4>
                    <span className={styles.bloquinhoUnique}>{table.cliente}</span>
                </div>

                <div>
                        <h4>Projeto:  </h4>
                    <span className={styles.bloquinhoUnique}>{table.projeto}</span>
                </div>

                <div>
                    <div>
                        <h4>Nr. de Fabricação:⠀⠀⠀⠀  </h4>
                        <span className={styles.bloquinho}>{table.ndefabricacao}</span>
                    </div>


                    <div>
                        <h4>Frequência Nominal:⠀⠀ </h4>
                        <span className={styles.bloquinho}>{table.freqnominal}</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>Classe de Tensão:⠀⠀⠀⠀  </h4>
                        <span className={styles.bloquinho}>{table.classetensao}</span>
                    </div>


                    <div>
                        <h4>Altitude:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h4>
                        <span className={styles.bloquinho}>{table.altitude}</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>Tensão de Alimentação:  </h4>
                        <span className={styles.bloquinho}>{table.tensaoalimentacao}</span>
                    </div>


                    <div>
                        <h4>Temperatura Ambiente:</h4>
                        <span className={styles.bloquinho}>{table.temperaturaambiente}</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>Tensão de Comando:⠀⠀</h4>
                        <span className={styles.bloquinho}>{table.tensaocomando}</span>
                    </div>


                    <div>
                        <h4>Grau de Proteção:⠀⠀⠀⠀ </h4>
                        <span className={styles.bloquinho}>{table.grauprotecao}</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>Corrente Nominal:⠀⠀⠀⠀</h4>
                        <span className={styles.bloquinho}>{table.correntenominal}</span>
                    </div>


                    <div>
                        <h4>Peso:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h4>
                        <span className={styles.bloquinho}>{table.peso}</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>icc Simetria:⠀⠀⠀⠀⠀⠀⠀⠀</h4>
                        <span className={styles.bloquinho}>{table.simetrica}</span>
                    </div>


                    <div>
                        <h4>Nº Série:⠀⠀⠀⠀⠀⠀⠀⠀⠀</h4>
                        <span className={styles.bloquinho}>{table.nserie}</span>
                    </div>
                </div>



            </section>
        </>
    )
}

export default Produtos;


export async function getServerSideProps({ params }){
   const prisma = new PrismaClient()
    const table  = await prisma.etiquetas.findUnique(
        {where: { 
            id: Number(params.id),
        }}
    )

    return {
       props:  table  
      
    }
    
    
  }
  

