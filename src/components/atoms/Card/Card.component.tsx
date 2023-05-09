import { staticAsset } from "@/utils/urlHelper";
import { StyledCardContainer } from "./Card.styled";
import { ICard } from "./types";

const Card = ({ icon, title, description }: ICard) => {
  return (
    <StyledCardContainer>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={icon}
            alt="Avatar"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="flip-card-back">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </StyledCardContainer>
  );
};

export default Card;
