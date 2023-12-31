import React , {FC, ReactElement} from 'react'
import {TextField} from '@mui/material'
import {ITextfield} from './interfaces/ITextfield'
import PropTypes from 'prop-types'

export const TitleField:FC<ITextfield> = (props):ReactElement => {
      const {disabled = false, onChange = (e) => {console.log(e)}} = props
    return(
        <TextField
        id="title"
        label="Task Title"
        placeholder="Task Title"
        variant="outlined"
        size="small"
        name="title"
        fullWidth
        disabled = {disabled}
        onChange = {onChange}
        />
    )
}

TitleField.propTypes  = {
  onChange : PropTypes.func,
   disabled: PropTypes.bool
}