import React from 'react'

import { Container, Row, Col, Image, Text, Tag } from '@ds.crisp/react-components'
import { FontWeight, FontSize, Color as ColorMap, getClassName, Spacing } from '@ds.crisp/foundation'

import Animate from '../components/Animate'

const AboutMe = () => {

  return (
    <section className={getClassName({ paddingY: Spacing.md })}>
    <Container>
    <Row className={getClassName({ marginT: Spacing.xl })}>
      <Col md={6}>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'0'}>
          <Image
            src='https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            width='100%'
            height='450'
          />
        </Animate>
      </Col>
      <Col md={5}>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'100'}>
          <Tag backgroundColor={ColorMap.shine} fontColor={ColorMap.dark} fontWeight={FontWeight.bold} className={getClassName({ paddingT: Spacing.md })}>
            ABOUT ME
          </Tag>
        </Animate>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'200'}>
          <Text fontSize={FontSize.xl} fontWeight={FontWeight.extrabold} className={getClassName({ marginY: Spacing.sm })}>
            Software Engineer based in Bangalore, India
          </Text>
        </Animate>
        <Animate aosType={'fade-up'} aosDuriation={'1200'} aosDelay={'300'}>
          <Text fontSize={FontSize.base} fontWeight={FontWeight.light} fontColor={ColorMap.gray}>
            I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a 
            professional web developer, I have acquired the skills and knowledge necessary to make your project a 
            success. I enjoy every step of the design process, from discussion and collaboration.
          </Text>
        </Animate>
      </Col>
    </Row>
    </Container>
    </section>
  )
}

export default AboutMe