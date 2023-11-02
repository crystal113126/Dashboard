import React  from 'react';
import { Box, Button} from "@mui/material";


export default function Keyword(props) {
    return (
        <Box display="flex" gap = {1}>
        <Button variant="contained" color="secondary" size='small' sx={{borderRadius:'40%'}} >{props.word}</Button>
        </Box>
    )

}