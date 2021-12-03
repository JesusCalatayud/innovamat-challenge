import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Text from "../Text/Text";
import { CardsWrapper } from "./cardSectionStyledComponents";

const CardSection = ({ sectionName, resources, onClickCard }) => {
  return (
    <div>
      <Text bold color="black" size="m">
        {sectionName}
      </Text>
      <CardsWrapper>
        {resources.map((resource, index) => {
          return (
            <Card
              key={index}
              title={resource.title}
              text={resource.description}
              source={resource.image}
              resourceId={resource.id}
              resourceType={resource.tag}
              onClick={onClickCard}
            />
          );
        })}
      </CardsWrapper>
    </div>
  );
};

CardSection.propTypes = {
  sectionName: PropTypes.string,
  resources: PropTypes.array,
  onClickCard: PropTypes.func,
};

CardSection.defaultProps = {
  sectionName: "",
  resources: [],
  onClickCard: () => null,
};

export default CardSection;
