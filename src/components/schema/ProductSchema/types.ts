import { BaseSchema } from "../../../types";
import { AggregateRatingSchema } from "../AggregateRatingSchema/types";
import { ImageObjectSchema } from "../ImageObjectSchema/types";
import { OfferSchema } from "../OfferSchema/types";
import { OrganizationSchema } from "../OrganizationSchema/types";
import { ReviewSchema } from "../ReviewSchema/types";

export interface ProductSchema extends BaseSchema {
  "@type": "Product";
  name: string;
  description?: string;
  image?: string | ImageObjectSchema | (string | ImageObjectSchema)[];
  brand?: string | OrganizationSchema;
  offers?: OfferSchema | OfferSchema[];
  sku?: string;
  gtin?: string;
  gtin8?: string;
  gtin13?: string;
  gtin14?: string;
  mpn?: string;
  aggregateRating?: AggregateRatingSchema;
  review?: ReviewSchema | ReviewSchema[];
  manufacturer?: OrganizationSchema;
  category?: string;
  model?: string;
}

export interface ProductSchemaProps {
  data: Omit<ProductSchema, "@context" | "@type">;
}
