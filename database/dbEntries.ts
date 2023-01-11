import { isValidObjectId } from "mongoose";
import { db } from ".";
import { Entry } from "../models"
import { IEntry } from '../models/Entry';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
    db.connect();
    const entry = await Entry.findById(id).lean();
    if (!isValidObjectId(id)) return null

    db.disconnect();

    return JSON.parse(JSON.stringify(entry));
}