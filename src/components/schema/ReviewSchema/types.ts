import { BaseSchema } from "../../../types";
import { AuthorSchema } from "../AuthorSchema/types";

export interface ReviewRatingSchema extends BaseSchema {
  "@type": "Rating";
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount?: number;
}

export interface ReviewItemSchema extends BaseSchema {
  "@type": string;
  name: string;
  image?:
    | string
    | {
        "@type": "ImageObject";
        url: string;
        width?: number;
        height?: number;
      };
  description?: string;
  sku?: string;
  brand?: {
    "@type": "Brand" | "Organization";
    name: string;
  };
  offers?: {
    "@type": "Offer";
    price: number;
    priceCurrency: string;
    availability?: "InStock" | "OutOfStock" | "PreOrder";
  };
}

export interface ReviewSchema extends BaseSchema {
  "@type": "Review";
  name?: string;
  reviewBody: string;
  abstract?: string;
  author: AuthorSchema;
  datePublished: string; // ISO 8601
  dateModified?: string; // ISO 8601
  reviewRating: ReviewRatingSchema;
  itemReviewed: ReviewItemSchema;
  publisher?: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  url?: string;
  inLanguage?: string;
  keywords?: string[];
  pros?: string[];
  cons?: string[];
  positiveNotes?: string[];
  negativeNotes?: string[];
  isAccessibleForFree?: boolean;
  awards?: string[];
  sameAs?: string[];
}

export interface ReviewSchemaProps {
  data: Omit<ReviewSchema, "@context">;
}
