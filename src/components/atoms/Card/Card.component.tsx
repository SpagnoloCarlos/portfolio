import { staticAsset } from "@/utils/urlHelper";
import { StyledCardContainer } from "./Card.styled";
import { ICard } from "./types";
import Image from "next/image";

const Card = ({ icon, title, description }: ICard) => {
  return (
    <StyledCardContainer>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image
            src={icon}
            alt="Avatar"
            width={100}
            height={100}
            // style={{ width: "100px", height: "100px" }}
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
