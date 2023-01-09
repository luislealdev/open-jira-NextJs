import type { NextApiRequest, NextApiResponse } from 'next'
import { IEntry } from '../../../models/Entry';
import { db } from '../../../database';
import { Entry } from '../../../models';

type Data = | { message: string } | IEntry[] | IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {


    switch (req.method) {
        case 'GET':
            return getEntries(res);

        default:
            return res.status(400).json({ message: 'Not entry point' });
    }
}

const getEntries = async (res: NextApiResponse<Data>) => {
    db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    db.disconnect();

    res.status(200).json(entries);
}