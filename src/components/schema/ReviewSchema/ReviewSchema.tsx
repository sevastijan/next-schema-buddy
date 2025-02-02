import { registerSchema } from "../../../lib/schema-registry";
import { ReviewSchemaProps } from "./types";

export const ReviewSchema = ({ data }: ReviewSchemaProps) => {
  const { "@type": _, ...rest } = data;

  registerSchema({
    ...rest,
    "@type": "Review",
  });

  return null;
};
