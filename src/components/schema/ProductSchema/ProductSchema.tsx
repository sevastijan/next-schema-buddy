import { ProductSchemaProps } from "./types";
import { registerSchema } from "../../../lib/schema-registry";

export const ProductSchema = ({ data }: ProductSchemaProps) => {
  registerSchema({
    "@type": "Product",
    ...data,
  });

  return null;
};
