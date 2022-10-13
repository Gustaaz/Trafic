import { request, Request, Response } from "express";
import { client } from "../prisma/client";

class PostController {
    async create(req: Request, res: Response) {
        try {
            const { titulo, descricao, img } = request.body

            const postCreate = client.post.create({
                data: {
                    titulo,
                    descricao,
                    img
                }
            })

            return res.status(201).json({ message: "Sucesso na criação do post", data: postCreate })
        } catch (error) {
            return res.status(500).json({ message: "Falha ao criar o post", error: error })
        }
    }

    async update(req: Request, res: Response) {
        try {

            const { id, titulo, descricao, img } = req.body

            const postUpdate = client.post.update({
                where: {
                    id
                },
                data: {
                    titulo,
                    descricao,
                    img
                }
            })

            return res.status(200).json({ message: "Post atualizado com sucesso", data: postUpdate })
        } catch (error) {
            return res.status(500).json({ message: "Falha ao atualizar o post", error: error })
        }
    }

    async findUnique(req: Request, res: Response) {
        try {

            const { id } = req.body

            const postUnique = client.post.findUnique({
                where: {
                    id
                },
                select: {
                    id: true,
                    img: true,
                    descricao: true,
                    titulo: true,
                }
            })

            return res.status(200).json({ message: "Post encontrado com sucesso", data: postUnique })
        } catch (error) {
            return res.status(500).json({ message: "Falha ao encontrar o post", error: error })
        }
    }

    async findMany(req: Request, res: Response) {
        try {

            const postMany = client.post.findMany({
                select: {
                    id: true,
                    img: true,
                    descricao: true,
                    titulo: true,
                }
            })

            return res.status(200).json({ message: "Sucesso", data: postMany })
        } catch (error) {
            return res.status(500).json({ message: "Falha", error: error })
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const postDelete = client.post.delete({
                where: {
                    id
                }
            })

            return res.status(202).json({ message: "Sucesso ao deletar o post", data: postDelete })
        } catch (error) {
            return res.status(500).json({ message: "Falha ao deletar o post", error: error })
        }
    }
}

export default new PostController