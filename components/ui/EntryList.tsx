import { List, Paper } from '@mui/material'
import { EntryItem } from './';
import { EntryStatus } from '../../interfaces/entries';
import { FC, useMemo, useContext, DragEvent } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus
}
export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status == status), [entries]);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('entryId');

        const entry = entries.find(e => e._id == id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();

    }

    return (
        <div onDragOver={allowDrop} onDrop={onDropEntry} className={isDragging ? styles.dragging : ''}>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .2s' }}>
                    {entriesByStatus.map(entry => (
                        <EntryItem key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    )
}
