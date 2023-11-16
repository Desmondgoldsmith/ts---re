import React, {FC, ReactElement} from 'react'
import {Box, Typography, Stack} from '@mui/material'
import {TitleField} from './_task_titleField'
import {DescriptionField} from './_task_descriptionField'
import {DateField} from './_task_dateField'


export const CreateTaskForm:FC = ():ReactElement =>{
    return(
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TitleField />
        <DescriptionField />
        <DateField />
      </Stack>
     </Box>
          )
}