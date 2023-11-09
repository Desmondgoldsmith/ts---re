import {IDisable} from './Idissable'
import React from 'react'

export interface ITextfield extends IDisable{
  onChange?: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}