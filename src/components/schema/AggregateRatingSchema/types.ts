import { BaseSchema } from "../../../types";

export interface AggregateRatingSchema extends BaseSchema {
  "@type": "AggregateRating";
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}
