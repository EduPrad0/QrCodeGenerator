import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { CardProduct } from "../../components/CardProduct";

// products:productsProps
// req: NextApiRequest, res:NextApiResponse
export default function products(table) {


  return (
    <main>
      <CardProduct table={table.table}/>
    </main>
  );
  

} 


export async function getServerSideProps(){
  const prisma = new PrismaClient()
  const table = await prisma.products.findMany()
 

  
  return {
     props: { table } 
    
  }
  
  
}
