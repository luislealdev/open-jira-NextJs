import { List, Paper } from '@mui/material'
import { EntryItem } from './';

export const EntryList = () => {
    return (
        <div>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
                <List sx={{ opacity: 1 }}>
                    <EntryItem/>
                    <EntryItem/>
                    <EntryItem/>
                </List>
            </Paper>
        </div>
    )
}
