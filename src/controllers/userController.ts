import { prisma } from "../config/prisma";
import { Request, Response } from 'express';


class UserController{

    public async create(req:Request,res:Response){
        try{

            const {name,age,email}= req.body;
            const createData={
                name:name,
                age:age,
                email:email,
                cpf:{
                    create:{
                        cpf:"Teste CPF"
                    },
                },

            }

            await prisma.user.create({data:createData});
            return res.status(200).json({message:"Usuário criado com sucesso"});
        }
        catch(e:any){
            return res.status(500).json({message:e.message});
        }
    }

   
}

export default new UserController();