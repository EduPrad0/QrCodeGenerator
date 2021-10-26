import { PrismaClient } from '.prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';


function formatadata(date) {
  return date
    ? format(new Date(date), "dd/MM/yyyy HH:mm:ss")
    : "--/--/---- 00:00:00";
}


function formatDate(date) {
  let d = new Date(date);

  // formatar data no formato ISO 8601
  let iso = d.getFullYear().toString() + "-";
  iso += (d.getMonth() + 1).toString().padStart(2, '0') + "-";
  iso += d.getDate().toString().padStart(2, '0') + "T";
  iso += d.getHours().toString().padStart(2, '0') + ":";
  iso += d.getMinutes().toString().padStart(2, '0') + ":";
  iso += d.getSeconds().toString().padStart(2, '0');
  const datad = formatadata(iso)
  return datad
}

const prisma = new PrismaClient();

export default async function Controller(req:NextApiRequest , res:NextApiResponse ) {
   
    const data = req.body;
    const timeNow = formatDate(new Date())
   
    try {
      const result = await prisma.etiquetas.create({
        data:{
          createdat: `${timeNow}`,         
          anofabricacao: data.anoFab,       
          normaaplicavel: data.normaApli, 
          cliente: data.cliente,
          projeto: data.projeto,   
          ndefabricacao: data.nmrFab,
          freqnominal: data.freqNominal,
          classetensao: data.classTensao,
          altitude: data.altitude,
          tensaoalimentacao: data.tensaoAliment,
          temperaturaambiente: data.temp,
          tensaocomando: data.tensaoComando,
          grauprotecao: data.grauProtecao,
          correntenominal: data.correnteNominal,
          peso: data.peso,
          simetrica: data.simetrica,          
          nserie: data.nmrSerie
        } 
      })

      return res.status(200).json(result);
    
      
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured while connecting to server." });
    }


};
