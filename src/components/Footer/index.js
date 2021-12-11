import React from 'react'
import { Row, Col, Container } from '@ds.crisp/react-components'
import { Color, getClassName, Spacing } from '@ds.crisp/foundation'

const Footer = () => (
  <footer className={getClassName({ backgroundColor: Color.dark, fontColor: Color.white, paddingY: Spacing.md, marginT: Spacing.md })}>
    <Container>
      <Row>
        <Col>
          © {new Date().getFullYear()}. All rights reserved by UIXLOVE.
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer