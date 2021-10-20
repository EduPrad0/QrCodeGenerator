import { FormEvent, useState } from "react";
var QRCode = require('qrcode.react');
import axios from "axios";


import { Button } from "../components/Button";

import styles from "./cadastro.module.scss"

interface gerarQrProps{
    idGerado: number;
}
export default function cadastrar(){
    const [fileImg, setFileImg] = useState('');
    const [name, setName] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [description, setDescription] = useState('');
    const [cad, isCad] = useState(true);
    const [code, setCode] = useState('');
    let nameResponse;

    function GeraQRCode(idGerado: gerarQrProps){
        var conteudo = `http://localhost:3000/item/${idGerado}`
        setCode(conteudo);
      }

    async function handleSubmitCad(event: FormEvent) {
        event.preventDefault();


        if(name.trim() === ''){
            alert('Please enter a name');
            return;
        }
        if(nameProduct.trim() === ''){
            alert('Please enter a product');
            return;
        }


        
        await axios.post('/api/mysql/Controller',{
            fileImg,
            name,
            nameProduct,
            description
        }).then((response: any) => {
            nameResponse = response.data.name
            GeraQRCode(response.data.id)
        })

        isCad(false)
        

        setFileImg("")
        setName("")
        setNameProduct("")
        setDescription("")

    }


    return cad ? (
        <main className={styles.mainContainer}>
            <div>
                <h1>Cadastre seu produto com o Generator3000</h1>

            </div>

            <section className={styles.sectionContent}>
                <form onSubmit={handleSubmitCad}>
                    <div className={styles.contImg}>
                        <label htmlFor="img">Clique aqui para anexar uma img</label>
                        <input 
                            value={fileImg}
                            onChange={event => setFileImg(event.target.value)}
                            type="file" name="img" id="img"
                            
                        />
                        
                    </div>

                    <label htmlFor="name">Seu nome: </label>
                    <input type="text" id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />


                    <label htmlFor="nameProduct">Nome do Produto: </label>
                    <input type="text" id="nameProduct"
                        value={nameProduct}
                        onChange={event => setNameProduct(event.target.value)}
                    />

                    <label htmlFor="desc">Descreva o Produto</label>
                    <textarea name="Description" id="desc"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    >
                    </textarea>


                    <div>
                     <Button name={"Enviar"}/>
                    </div>
                </form>
            </section>
        </main>
    ) : (
        <main className={styles.mainContainer}>
            <section className={styles.sectionContent}>
                <div>
                <h3>Este é o QRcode do produto : {nameResponse}</h3>
                </div>

                <p>Clique na imagem e salve-a, e a imprima</p>
                <p>Infelizmente perdi 3 hrs e dps eu melhoro</p>

                <QRCode value={code} />


                <span onClick={() => isCad(true)}>
                    <Button name={"Cadastrar novo produto"}/>
                </span>
            </section>
        </main>
    );
}