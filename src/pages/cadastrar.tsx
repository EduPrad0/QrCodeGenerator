import { FormEvent, useState } from "react";
var QRCode = require('qrcode.react');
import axios from "axios";


import { Button } from "../components/Button";

import styles from "./cadastro.module.scss"
import { Navbar } from "../components/Navbar";

interface gerarQrProps {
    idGerado: number;
}
export default function cadastrar() {
    const [anoFab, setAnoFab] = useState('');
    const [normaApli, setNormaApli] = useState('');
    const [cliente, setCliente] = useState('');
    const [projeto, setProjeto] = useState('');
    const [nmrFab, setNmrFab] = useState('');
    const [freqNominal, setFreqNominal] = useState('');
    const [classTensao, setClassTensao] = useState('');
    const [altitude, setAltitude] = useState('');
    const [tensaoAliment, setTensaoAliment] = useState('');
    const [temp, setTemp] = useState('');
    const [tensaoComando, setTensaoComando] = useState('');
    const [grauProtecao, setGrauProtecao] = useState('');
    const [correnteNominal, setCorrenteNominal] = useState('');
    const [peso, setPeso] = useState('');
    const [simetria, setSimetria] = useState('');
    const [nmrSerie, setNmrSerie] = useState('');





    const [cad, isCad] = useState(true);
    const [code, setCode] = useState('');
    let nameResponse;






    function GeraQRCode(idGerado: gerarQrProps) {
        var conteudo = `https://qrcodeapp-edu-card.herokuapp.com//item/${idGerado}`
        setCode(conteudo);
    }




    async function handleSubmitCad(event: FormEvent) {
        event.preventDefault();



        await axios.post('/api/mysql/Controller', {
                anoFab,
                normaApli,
                cliente,
                projeto,
                nmrFab,
                freqNominal,
                classTensao,
                altitude,
                tensaoAliment,
                temp,
                tensaoComando,
                grauProtecao,
                correnteNominal,
                peso,
                simetria,
                nmrSerie,
        }).then((response: any) => {
            nameResponse = response.data.name
            GeraQRCode(response.data.id)
        })

        isCad(false)

        setAnoFab("")
        setNormaApli("")
        setCliente("")
        setProjeto("")
        setNmrFab("")
        setFreqNominal("")
        setClassTensao("")
        setAltitude("")
        setTensaoComando("")
        setGrauProtecao("")
        setCorrenteNominal("")
        setPeso("")
        setSimetria("")
        setNmrSerie("")
        setTensaoAliment("")
        setTemp("")
        

    }

    


    return cad ? (
        <>
            < Navbar />
            <main className={styles.mainContainer}>
                <section className={styles.sectionContent}>

                    <h2>Cadastro de etiqueta</h2>

                    <form onSubmit={handleSubmitCad}>
                        <fieldset  >
                            <legend> Formulário </legend>

                            <div  className={styles.all}>
                                <label>Ano de fabricação : 
                                    <input type="text" placeholder="Ano de Fabricação"
                                        value={anoFab}
                                        onChange={event => setAnoFab(event.target.value)}
                                    />
                                </label>

                                <label>Norma Aplicavel⠀: 
                                    <input type="text" placeholder="Norma aplicavel"
                                        value={normaApli}
                                        onChange={event => setNormaApli(event.target.value)}
                                    />
                                </label>
                            </div>

                            <div className={styles.unique}>
                                <label> Cliente : </label>
                                    <input type="text" placeholder="cliente"
                                        value={cliente}
                                        onChange={event => setCliente(event.target.value)}
                                    />
                                
                            </div>
                            
                            <div className={styles.unique}>
                                <label> Projeto : </label>
                                    <input type="text" placeholder="Project"
                                        value={projeto}
                                        onChange={event => setProjeto(event.target.value)}
                                    />
                                
                            </div>
                            
                            
                            <div className={styles.all}>
                                <label>Nr. De Fabricação : 
                                    <input type="text" placeholder="nr fab"
                                        value={nmrFab}
                                        onChange={event => setNmrFab(event.target.value)}
                                    />
                                </label>

                                <label>Frequência nominal : 
                                    <input type="text" placeholder="xx hz"
                                        value={freqNominal}
                                        onChange={event => setFreqNominal(event.target.value)}
                                    />
                                </label>
                            </div>
                            
                            <div className={styles.all}>
                                <label>Classe de tensão : 
                                    <input type="text" placeholder=" xx kv"
                                        value={classTensao}
                                        onChange={event => setClassTensao(event.target.value)}
                                    />
                                </label>

                                <label> Altitude :
                                    <input type="text" placeholder=" xx m"
                                        value={altitude}
                                        onChange={event => setAltitude(event.target.value)}
                                    />
                                </label>
                            </div>

                            <div className={styles.all}>
                                <label>Tensão de alimentação : 
                                    <input type="text" placeholder="xx kv"
                                        value={tensaoAliment}
                                        onChange={event => setTensaoAliment(event.target.value)}
                                    />
                                </label>

                                <label>Temperatura ambiente(ºC)
                                    <input type="text" placeholder="xx ºC"
                                        value={temp}
                                        onChange={event => setTemp(event.target.value)}
                                    />
                                </label>
                            </div>

                            <div className={styles.all}>
                                <label>Tensão de comando : 
                                    <input type="text" placeholder="00/00/00vbb"
                                        value={tensaoComando}
                                        onChange={event => setTensaoComando(event.target.value)}
                                    />
                                </label>

                                <label>Grau de proteção : 
                                    <input type="text" placeholder="IP00"
                                        value={grauProtecao}
                                        onChange={event => setGrauProtecao(event.target.value)}
                                    />
                                </label>
                            </div>


                           <div className={styles.all}>
                                <label>Corrente nominal : 
                                    <input type="text" placeholder="Corrente"
                                        value={correnteNominal}
                                        onChange={event => setCorrenteNominal(event.target.value)}
                                    />
                                </label>               
                                <label>Peso
                                    <input type="text" placeholder="Peso"
                                        value={peso}
                                        onChange={event => setPeso(event.target.value)}
                                    />
                                </label>

                                <label>icc Simétrica
                                    <input type="text" placeholder="16ka"
                                        value={simetria}
                                        onChange={event => setSimetria(event.target.value)}
                                    />
                                </label>                                            
                           </div>

                            <div className={styles.unique}>
                                <label>Nmr. DE SERIE </label>
                                    <input type="text" placeholder="nmr de serie"
                                        value={nmrSerie}
                                        onChange={event => setNmrSerie(event.target.value)}
                                    />
                                
                            </div>                                  

                            <button >Enviar</button>
                        </fieldset>
                    </form>
                </section>
            </main>
                                </>
                                ) : (
                                <>
                                    <Navbar />
                                    <main className={styles.content}>
                                            <img src="/logo-.png" alt="" />
                                        <section >
                                            <div>
                                                <h3>Este é o QRcode do produto: {cliente}</h3>
                                                <p>Clique na imagem e salve-a, e a imprima</p>
                                            </div>


                                            <QRCode value={code} />


                                            <span onClick={() => isCad(true)}>
                                                <Button name={"Cadastrar novo produto"} />
                                            </span>
                                        </section>
                                    </main>
                                </>
                                );
}