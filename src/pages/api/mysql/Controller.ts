import { PrismaClient } from '.prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';


function formatDate(date) {
  return date
    ? format(new Date(date) , "dd/MM/yyyy HH:mm:ss", {
      locale: ptBR
    })
    : "--/--/---- 00:00:00";
}

const prisma = new PrismaClient();

export default async function Controller(req:NextApiRequest , res:NextApiResponse ) {
   
    const data = req.body;
    const timeNow = formatDate(new Date())
   
    try {
      const result = await prisma.products.create({
        data:{
          name: data.name,
          nameProduct: data.nameProduct,
          description: data.description,
          createdAt: `${timeNow}`
        } 
      })

      return res.status(200).json(result);
    
      
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured while connecting to server." });
    }


};
