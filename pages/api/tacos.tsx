// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { aTacos } from '../../data/tacos'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {

    if (req.method !== 'GET') {
        return res.status(405).json({ res: false, message: "Código de estado de respuesta no permitido" })
    }

    console.log(aTacos);
    

    res.status(200).json({ tacos: aTacos, res: true })
}
