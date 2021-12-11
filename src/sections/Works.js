import React from 'react'

import { Card, Image, Text, Tag, Container, Col, Row } from '@ds.crisp/react-components'
import { Spacing, FontSize, FontWeight, Color as ColorMap, Size, getClassName } from '@ds.crisp/foundation'

import '@ds.crisp/scss/lib/Grid.css'
import '@ds.crisp/scss/lib/Image.css'
import '@ds.crisp/scss/lib/Color.css'
import '@ds.crisp/scss/lib/Text.css'
import '@ds.crisp/scss/lib/Typography.css'
import '@ds.crisp/scss/lib/Tag.css'
import '@ds.crisp/scss/lib/Utilities.css'
import '@ds.crisp/scss/lib/Loader.css'

import Animate from '../components/Animate'

export const WorkCard = ({
  imgURL,
  title,
  description,
  tags,
  targetURL,
}) => {
  return (
    <a target='_blank' href={'#'} className='portfolio-work-links'>
    <Card padding={Spacing.sm} borderRadius={Spacing.xs} backgroundColor={ColorMap['shine']} className='mb-3 portfolio-work-card'>
      <Image
        src={imgURL}
        width='100%'
        height='200'
      />
      <Text fontSize={FontSize.md} fontWeight={FontWeight.bold} fontColor={ColorMap.dark} className='mt-2 mb-0'>
        {title}
      </Text>
      <Text fontSize={FontSize.xs} fontColor={ColorMap.metal} className='mt-1 mb-2'>
        {description}
      </Text>
      {tags.map(({ theme, label }) => (
        <Tag
          size={Size.sm}
          backgroundColor={ColorMap[`light-${theme}`]}
          fontColor={ColorMap[theme]}
          fontWeight={FontWeight.medium}
          className='mr-2 mb-2'
          borderRadius={Spacing.none}
        >
          {label}
        </Tag>
      ))}
    </Card>
    </a>
  )
}

export const Works = () => {
  return (
    <section className={getClassName({ marginB: Spacing.md })}>
      <Container>
      <Animate aosType={'fade-right'} aosDuriation={'1200'} aosDelay={'0'}>
        <Text fontSize={FontSize.lg} fontWeight={FontWeight.extrabold} className={getClassName({ marginY: Spacing.md })}>
          Projects
        </Text>
      </Animate>
      <Row>
        <Col md={4}>
          <Animate aosType={'fade-right'} aosDuriation={'1200'} aosDelay={'0'}>
            <WorkCard
              imgURL={'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/35886e125691923.611e42d37fa6a.png'}
              title={'@DS.Crisp UI components'}
              description={'Using Storybook to develop shared understanding | by Bommu'}
              tags={[
                {
                  theme: 'red',
                  label: 'Storybook JS'
                },
                {
                  theme: 'blue',
                  label: 'React JS'
                },
                {
                  theme: 'yellow',
                  label: 'Typescript JS'
                }
              ]}
            />
          </Animate>
        </Col>
        <Col md={4}>
          <Animate aosType={'fade-right'} aosDuriation={'1200'} aosDelay={'200'}>
            <WorkCard
              imgURL={'https://cdn.dribbble.com/users/427857/screenshots/10143929/media/8b4534bf2923723580d3f22d451ecb3a.jpg?compress=1&resize=400x300'}
              title={'Widget based dashboards'}
              description={'Using Storybook to develop shared understanding | by Bommu'}
              tags={[
                {
                  theme: 'green',
                  label: '@ds.crisp'
                },
                {
                  theme: 'blue',
                  label: 'React JS'
                }
              ]}
            />
          </Animate>
        </Col>
        <Col md={4}>
          <Animate aosType={'fade-right'} aosDuriation={'1200'} aosDelay={'400'}>
            <WorkCard
              imgURL={'https://cdn.dribbble.com/users/563897/screenshots/15275579/media/0e8bf7f55bd6ebc9489c0d30f5cf6691.png?compress=1&resize=400x300'}
              title={'PWA Weather chatbot'}
              description={'Amazon Lambda | by Bommu'}
              tags={[
                {
                  theme: 'violet',
                  label: 'PWA'
                },
                {
                  theme: 'green',
                  label: '@ds.crisp'
                },
                {
                  theme: 'blue',
                  label: 'React JS'
                }
              ]}
            />
          </Animate>
        </Col>
      </Row>
      </Container>
    </section>
  )
}