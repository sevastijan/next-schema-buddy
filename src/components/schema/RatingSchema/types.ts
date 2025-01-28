import { BaseSchema } from "../../../types";

export interface RatingSchema extends BaseSchema {
  "@type": "Rating";
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
}
