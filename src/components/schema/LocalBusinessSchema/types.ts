import { BaseSchema } from "../../../types";

export interface GeoCoordinates extends BaseSchema {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface OpeningHoursSpecification extends BaseSchema {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
  validFrom?: string;
  validThrough?: string;
}

export interface PriceRange {
  minPrice?: number;
  maxPrice?: number;
  currency: string;
}

export interface LocalBusinessSchema extends BaseSchema {
  "@type":
    | "LocalBusiness"
    | "Restaurant"
    | "Store"
    | "Bakery"
    | "BarOrPub"
    | "BeautySalon"
    | "BookStore"
    | "CafeOrCoffeeShop"
    | "ClothingStore"
    | "GroceryStore"
    | "Hotel"
    | "MovieTheater"
    | "ShoppingCenter";
  name: string;
  image?: string | string[];
  "@id"?: string;
  url?: string;
  telephone?: string;
  email?: string;
  description?: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: GeoCoordinates;
  openingHoursSpecification?: OpeningHoursSpecification[];
  priceRange?: string;
  currencyAccepted?: string;
  paymentAccepted?: string[];
  areaServed?: string | string[];
  hasMap?: string;
  sameAs?: string[];
  logo?: {
    "@type": "ImageObject";
    url: string;
    width?: number;
    height?: number;
  };
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

export interface LocalBusinessSchemaProps {
  data: Omit<LocalBusinessSchema, "@context" | "@type"> & {
    "@type"?: LocalBusinessSchema["@type"];
  };
}
