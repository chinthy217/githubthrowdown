import React from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

const Button = (props) => (
  <SemanticButton {...props}>{props.children}</SemanticButton>
)

export default Button
