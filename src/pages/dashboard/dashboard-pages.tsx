import React, {FC, ReactElement} from 'react'
import Grid from '@mui/material/Grid';
import {Sidebar} from '../../components/sidebar/sidebar.components'
import {TaskArea} from '../../components/task-area/task-area.components'

export const Dashboard:FC = ():ReactElement => {
    return(
            <Grid container minHeight="100vh" p={0} m={0}>
            <TaskArea/>
            <Sidebar/>
            </Grid>
          )
}