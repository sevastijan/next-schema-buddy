import { BaseSchema } from "../../../types";

export interface ImageObjectSchema extends BaseSchema {
  "@type": "ImageObject";
  url: string;
  width?: number;
  height?: number;
  caption?: string;
}
