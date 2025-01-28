import { BaseSchema } from "../../../types";

export interface OfferSchema extends BaseSchema {
  "@type": "Offer";
  price: number | string;
  priceCurrency: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  url?: string;
  itemCondition?: "NewCondition" | "UsedCondition" | "RefurbishedCondition";
  validFrom?: string;
  priceValidUntil?: string;
}
