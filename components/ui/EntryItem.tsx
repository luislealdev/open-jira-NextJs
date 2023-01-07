import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC } from 'react'
import { Entry } from '../../interfaces/entries';
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';

interface Props {
    entry: Entry
}
export const EntryItem: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext);

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        startDragging();
        event.dataTransfer.setData('entryId', entry._id)
    }

    const onDragEnd = () => {
        endDragging();
    }

    return (
        <Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
