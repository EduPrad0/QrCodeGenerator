import { PrismaClient } from '.prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { format } from "date-fns";

function formatDate(date) {
  return date
    ? format(new Date(date), "dd/MM/yyyy HH:mm:ss")
    : "--/--/---- 00:00:00";
}




const prisma = new PrismaClient();

export default async function Controller(req:NextApiRequest , res:NextApiResponse ) {
   if(req.method === 'POST'){
    const data = req.body;
    const timeNow = formatDate(new Date())
    try {
      const result = await prisma.products.create({
          data:{
            name: data.name,
            nameProduct: data.nameProduct,
            description: data.description,
            fileImg: data.fileImg,
            createdAt: `${timeNow}`
          }
      })

      return res.status(200).json(result);
    
      
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured while connecting to server." });
    }




   }else if(req.method === 'GET'){
     try{
        const {id} = req.query
        return res.status(200).json(id);


     } catch (err) {
       console.log(err);
       res.status(403).json({ err: "Error occured while connecting to server." });
     }
   }

};
