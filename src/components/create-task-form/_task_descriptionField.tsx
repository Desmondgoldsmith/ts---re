import React, {FC,ReactElement} from 'react'
import {TextField} from '@mui/material'
import {ITextfield} from './interfaces/ITextfield'
import propTypes from 'prop-types'

export const DescriptionField:FC<ITextfield> = ({onChange = (e) => {console.log(e)}, disabled = false}):ReactElement => {
    return(
        <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
        onChange = {onChange}
        disabled = {disabled}
        />
    )
}

DescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
}