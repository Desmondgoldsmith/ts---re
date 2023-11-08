import React , {FC, ReactElement} from 'react'
import {Avatar, Box , Typography} from '@mui/material'

export const Profile:FC = ():ReactElement => {
    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        >
            <Avatar 
             sx={{
                width: '96px',
                height: '96px',
                backgroundColor: 'primary.main',
                marginBottom: '16px',
              }}
            >
              <Typography variant="h4" color="text.primary">
                DG
            </Typography>
            </Avatar>

            {/* name */}
            <Typography variant="h6" color="text.primary">
              Desmond Goldsmith
            </Typography>
            {/* welcome section */}
            <Typography variant="body1" color="text.primary">
            Welcome, Desmond. This is your personal tasks manager!
            </Typography>
            </Box>
    )
} 