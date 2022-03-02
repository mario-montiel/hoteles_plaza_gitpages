// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prismaDB from '../../prisma/Instance'

export default async function getTacos(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    
    if (req.method !== 'GET') {
        return res.status(405).json({ message: "Código de estado de respuesta no permitido" })
    }

    const departments = await prismaDB.tacos.findMany({
        orderBy: {
            id: 'asc'
        }
    })

    res.json(JSON.stringify(departments))
}