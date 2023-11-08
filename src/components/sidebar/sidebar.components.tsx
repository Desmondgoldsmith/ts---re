import React , {FC , ReactElement} from 'react'
import Grid from '@mui/material/Grid';
import {Profile} from '../profile/profile.compoents'
import {CreateTaskForm} from '../create-task-form/create-task-form.components'


export const Sidebar:FC = ():ReactElement => {
   return(
    <Grid 
    item
    md={4}
    sx={{
      height: '100vh',
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100%',
      backgroundColor: 'background.paper',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
        <Profile/>
        <CreateTaskForm/>
    </Grid>
      )
}