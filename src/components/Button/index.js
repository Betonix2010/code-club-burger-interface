/* eslint-disable prettier/prettier */
// eslint-disable-next-line import-helpers/order-imports
import PropTypes from 'prop-types'

import React from 'react'

import { ContainerButton } from './styles'

function Button({ children, ... rest }) { 
    return <ContainerButton>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
    children: PropTypes.string
}