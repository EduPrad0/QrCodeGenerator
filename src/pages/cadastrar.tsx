import { FormEvent, useState } from "react";
var QRCode = require('qrcode.react');
import axios from "axios";


import { Button } from "../components/Button";

import styles from "./cadastro.module.scss"
import { Navbar } from "../components/Navbar";

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
        var conteudo = `https://qrcodeapp-edu-card.herokuapp.com//item/${idGerado}`
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
        <>
         < Navbar />
        <main className={styles.mainContainer}>
            <div>
                <h1>ProdutosCode</h1>
                <img src="/code.png" alt="" />
            </div>

            <section className={styles.sectionContent}>
                <form onSubmit={handleSubmitCad}>
                    <p>Cadastre seu produto</p>

                    <div className={styles.contImg}>
                        <label htmlFor="img">Clique aqui para anexar uma img</label>
                        <input 
                            value={fileImg}
                            onChange={event => setFileImg(event.target.value)}
                            type="file" name="img" id="img"
                            
                        />
                        
                    </div>

                  
                    <input type="text" id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />


                    <input type="text" id="nameProduct"
                        placeholder="Nome do produto"
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
        </>
    ) : (
        <>
        <Navbar />
        <main className={styles.content}>
            <section >
                <div>
                <h3>Este é o QRcode do produto : {nameResponse}</h3>
                </div>

                <p>Clique na imagem e salve-a, e a imprima</p>

                <QRCode value={code} />


                <span onClick={() => isCad(true)}>
                    <Button name={"Cadastrar novo produto"}/>
                </span>
            </section>
        </main>
        </>
    );
}