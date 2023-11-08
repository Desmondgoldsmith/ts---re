import React , {FC, ReactElement} from 'react'
import {Avatar, Box , Typography} from '@mui/material'
import PropTypes from 'prop-types'

// defining our interface
interface Iprofile{
    name?:string
}

export const Profile:FC<Iprofile> = (props):ReactElement => {
    const {name = 'Desmond Goldsmith'} = props
    const [firstName, lastName] = name.split(' ');
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
            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
            </Typography>
            </Avatar>

            {/* name */}
            <Typography variant="h6" color="text.primary" sx={{fontWeight : 'bold'}}>
              {`${name}`}
            </Typography>
            {/* welcome section */}
            <Typography variant="body1" color="text.primary">
            Welcome, {`${firstName}`}. This is your personal tasks manager!
            </Typography>
            </Box>
    )
} 

Profile.propTypes = {
    name : PropTypes.string
}