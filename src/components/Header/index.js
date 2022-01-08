import React from "react";
import clsx from "clsx";

import { Container, Row, Tag } from "@ds.crisp/react-components";
import {
  getClassName,
  Spacing,
  Color as ColorMap,
  FontWeight,
  FontSize,
} from "@ds.crisp/foundation";

const Header = ({ socialLinks, name }) => {
  const className = clsx(
    "portfolio-header__container",
    getClassName({ paddingY: Spacing.sm })
  );

  const renderLinks = () => {
    return socialLinks ? (
      <>
        {Object.entries(socialLinks).map(([key, value]) => (
          <a
            href={value || '#'}
            className="portfolio-social-links"
            aria-label={`social-media-link-${key}`}
            target={value ? '_blank' : '_self'}
            key={key}
          >
            <i
              class={`icofont-${key} ${getClassName({
                fontColor: ColorMap.dark,
                fontSize: FontSize.lg,
                padding: Spacing.xs,
              })}`}
            />
          </a>
        ))}
      </>
    ) : null;
  };
  return (
    <header className={className}>
      <Container>
        <Row
          className={`justify-content-between ${getClassName({
            marginX: Spacing.xxxs,
          })}`}
        >
          <a href="#" className="portfolio-social-links">
            <Tag
              backgroundColor={ColorMap["light-blue"]}
              fontColor={ColorMap.blue}
              fontWeight={FontWeight.bold}
            >
              {name || 'NA'}
            </Tag>
          </a>
          <div className="d-flex align-items-center">
            {renderLinks()}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
