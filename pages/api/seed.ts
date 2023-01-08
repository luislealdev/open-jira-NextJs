import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database';

type Data = {
    message: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') return res.status(401).json({ message: 'Not authorizated' });

    await db.connect();

    await db.disconnect();

    res.status(200).json({ message: 'Everything cool' })
}