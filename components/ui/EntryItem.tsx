import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC } from 'react'
import { Entry } from '../../interfaces/entries';
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';
import { useRouter } from 'next/router';
import { fromThenToNow } from '../../utils/dateFunctions';

interface Props {
    entry: Entry
}
export const EntryItem: FC<Props> = ({ entry }) => {

    const router = useRouter();

    const { startDragging, endDragging } = useContext(UIContext);

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        startDragging();
        event.dataTransfer.setData('entryId', entry._id)
    }

    const onDragEnd = () => {
        endDragging();
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`);
    }

    return (
        <Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd} onClick={onClick}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>{`hace ${fromThenToNow(entry.createdAt)}`}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
