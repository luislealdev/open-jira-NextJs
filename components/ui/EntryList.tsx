import { List, Paper } from '@mui/material'
import { EntryItem } from './';
import { EntryStatus } from '../../interfaces/entries';
import { FC, useMemo, useContext, DragEvent } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
    status: EntryStatus
}
export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status == status), [entries]);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('entryId');
        console.log(id);
    }

    return (
        <div onDragOver={allowDrop} onDrop={onDropEntry}>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
                <List sx={{ opacity: 1 }}>
                    {entriesByStatus.map(entry => (
                        <EntryItem key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    )
}
