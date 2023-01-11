import type { NextApiRequest, NextApiResponse } from 'next'
import { IEntry } from '../../../models/Entry';
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry } from '../../../models';

type Data = { message: string } | IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    // const { id } = req.query;

    // if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: `The id: ${id}, is not valid` });

    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res);

        case 'GET':
            return getEntry(req, res);

        default:
            return res.status(400).json({ message: 'Method doesnt exist' });
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    await db.connect();
    const entryToUpdate = await Entry.findById(id);

    const { description = entryToUpdate!.description, status = entryToUpdate!.status } = req.body;

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });
        res.status(200).json(updatedEntry);
        await db.disconnect();
    } catch (error: any) {
        console.log(error);
        await db.disconnect();
        res.status(400).json({ message: error.erros.status.message });
    }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    await db.connect();

    try {
        const entry = await Entry.findById(id);
        res.status(200).json(entry);
        await db.disconnect();
    } catch (error: any) {
        console.log(error);
        await db.disconnect();
        res.status(400).json({ message: error.erros.status.message });
    }
}