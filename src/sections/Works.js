import React from "react";

import {
  Card,
  Image,
  Text,
  Tag,
  Container,
  Col,
  Row,
} from "@ds.crisp/react-components";
import {
  Spacing,
  FontSize,
  FontWeight,
  Color as ColorMap,
  Size,
  getClassName,
} from "@ds.crisp/foundation";

import "@ds.crisp/scss/lib/Grid.css";
import "@ds.crisp/scss/lib/Image.css";
import "@ds.crisp/scss/lib/Color.css";
import "@ds.crisp/scss/lib/Tag.css";
import "@ds.crisp/scss/lib/Utilities.css";
import "@ds.crisp/scss/lib/Loader.css";

import Animate from "../components/Animate";

export const WorkCard = ({ img, title, description, tags, targetURL, key }) => {
  return (
    <a
      target={targetURL ? "_blank" : "_self"}
      href={targetURL || "#"}
      className="portfolio-work-links"
      key={key}
    >
      <Card
        padding={Spacing.sm}
        borderRadius={Spacing.xs}
        backgroundColor={ColorMap["shine"]}
        className="mb-3 portfolio-work-card"
      >
        <Image
          src={img?.src}
          width="100%"
          height="200"
          alt={img?.alt || "Project preview"}
        />
        <Text
          fontSize={FontSize.md}
          fontWeight={FontWeight.bold}
          fontColor={ColorMap.dark}
          className="mt-2 mb-0"
        >
          {title}
        </Text>
        <Text
          fontSize={FontSize.xs}
          fontColor={ColorMap.metal}
          className="mt-1 mb-2"
        >
          {description}
        </Text>
        {tags.map(({ theme, label }) => (
          <Tag
            size={Size.sm}
            backgroundColor={ColorMap[`light-${theme}`]}
            fontColor={ColorMap[theme]}
            fontWeight={FontWeight.medium}
            className="mr-2 mb-2"
            borderRadius={Spacing.none}
          >
            {label}
          </Tag>
        ))}
      </Card>
    </a>
  );
};

export const Works = ({ projects = [] }) => {
  return (
    <section className={getClassName({ marginB: Spacing.md })}>
      <Container>
        <Animate aosType={"fade-right"} aosDuriation={"1200"} aosDelay={"0"}>
          <Text
            fontSize={FontSize.lg}
            fontWeight={FontWeight.extrabold}
            className={getClassName({ marginY: Spacing.md })}
          >
            Projects
          </Text>
        </Animate>
        <Row>
          {projects.map((v, index) => (
            <Col md={4}>
              <Animate
                aosType={"fade-right"}
                aosDuriation={"1200"}
                aosDelay={(index + 100).toString()}
              >
                <WorkCard
                  key={`project-card-${index}`}
                  img={v?.img}
                  title={v?.title}
                  description={v?.description}
                  targetURL={v?.targetURL}
                  tags={v?.tags}
                />
              </Animate>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
