import React from 'react'

import { Container, Row, Col, Image, Text, Tag } from '@ds.crisp/react-components'
import { FontWeight, FontSize, Color as ColorMap, getClassName, Spacing } from '@ds.crisp/foundation'

import Animate from '../components/Animate'

const AboutMe = ({
  title = 'NA',
  summary = 'NA',
  img = {
    src: 'https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    alt: 'About me image',
  }
}) => {

  return (
    <section className={getClassName({ paddingY: Spacing.md })}>
    <Container>
    <Row>
      <Col md={6}>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'0'}>
          <Image
            src={img?.src}
            width='100%'
            height='450'
            alt={img?.alt}
          />
        </Animate>
      </Col>
      <Col md={5}>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'100'}>
          <Tag backgroundColor={ColorMap.shine} fontColor={ColorMap.dark} fontWeight={FontWeight.medium}>
            ABOUT ME
          </Tag>
        </Animate>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'200'}>
          <Text fontSize={FontSize.xl} fontWeight={FontWeight.extrabold} className={getClassName({ marginY: Spacing.sm })}>
            {title}
          </Text>
        </Animate>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'300'}>
          <Text fontSize={FontSize.base} fontWeight={FontWeight.light} fontColor={ColorMap.gray}>
            {summary}
          </Text>
        </Animate>
      </Col>
    </Row>
    </Container>
    </section>
  )
}

export default AboutMe