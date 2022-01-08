import React from 'react'
import { Row, Col, Container } from '@ds.crisp/react-components'
import { Color, getClassName, Spacing } from '@ds.crisp/foundation'

const Footer = ({
  text,
}) => (
  <footer className={getClassName({ backgroundColor: Color.dark, fontColor: Color.white, paddingY: Spacing.md, marginT: Spacing.md })}>
    <Container>
      <Row>
        <Col>
          {text}
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer