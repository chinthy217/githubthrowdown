import React from 'react'
import { Card as SemanticCard, Icon, Image } from 'semantic-ui-react'

const Card = (props) => (
  <SemanticCard {...props}>
    {props.imageUrl && <Image src={props.imageUrl} wrapped ui={false} />}
    <SemanticCard.Content>
      <SemanticCard.Header>{props.header}</SemanticCard.Header>
      <SemanticCard.Content
        description={props.description ? props.description : ''}
      />
    </SemanticCard.Content>
    <SemanticCard.Content extra>{props.children}</SemanticCard.Content>
  </SemanticCard>
)

export default Card
