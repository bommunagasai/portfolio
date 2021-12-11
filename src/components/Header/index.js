import React from "react"
import clsx from "clsx"

import { Container, Row, Col, Tag } from "@ds.crisp/react-components"
import { getClassName, Spacing, Color as ColorMap, FontWeight, FontSize } from "@ds.crisp/foundation"

const Header = () => {
  const className = clsx(
    'portfolio-header__container',
    getClassName({ paddingY: Spacing.sm }),
  )
  return (
    <header className={className}>
      <Container>
        <Row className={`justify-content-between ${getClassName({ marginX: Spacing.xxxs })}`}>
          <a href='#' className='portfolio-social-links'>
            <Tag backgroundColor={ColorMap['light-blue']} fontColor={ColorMap.blue} fontWeight={FontWeight.bold}>
              Bommu Nagasai
            </Tag>
          </a>
          <div className='d-flex align-items-center'>
            <a href='#' className='portfolio-social-links'>
              <i class={`icofont-linkedin ${getClassName({ fontColor: ColorMap.dark, fontSize: FontSize.lg, padding: Spacing.xs })}`}/>
            </a>
            <a href='#' className='portfolio-social-links'>
              <i class={`icofont-instagram ${getClassName({ fontColor: ColorMap.dark, fontSize: FontSize.lg, padding: Spacing.xs })}`}/>
            </a>
            <a href='#' className='portfolio-social-links'>
              <i class={`icofont-github ${getClassName({ fontColor: ColorMap.dark, fontSize: FontSize.lg, padding: Spacing.xs })}`}/>
            </a>
          </div>
        </Row>
      </Container>
    </header>    
  )
}

export default Header