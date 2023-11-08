import React, {FC, ReactElement} from 'react'
import Grid from '@mui/material/Grid';
import {Sidebar} from '../../components/sidebar/sidebar.components'

export const Dashboard:FC = ():ReactElement => {
    return(
            <Grid container minHeight="100vh" p={0} m={0}>
            <Grid item md={8} px={4}>
            <h2>Content Area</h2>
            </Grid>
            <Sidebar/>
            </Grid>
          )
}