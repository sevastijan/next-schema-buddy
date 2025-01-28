import { BaseSchema } from "../../../types";
import { OrganizationSchema } from "../OrganizationSchema/types";
import { PersonSchema } from "../PersonSchema/type";
import { RatingSchema } from "../RatingSchema/types";

export interface ReviewSchema extends BaseSchema {
  "@type": "Review";
  author: PersonSchema | OrganizationSchema;
  datePublished?: string;
  reviewBody?: string;
  reviewRating?: RatingSchema;
}
