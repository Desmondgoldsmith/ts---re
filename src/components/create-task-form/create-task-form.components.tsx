import React, {FC, ReactElement} from 'react'
import {Box, Typography} from '@mui/material'


export const CreateTaskForm:FC = ():ReactElement =>{
    return(
            <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
                <Typography
                sx={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px',
                  }}
                >Create a Task</Typography>
            </Box>
          )
}