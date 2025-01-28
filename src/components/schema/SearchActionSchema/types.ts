import { BaseSchema } from "../../../types";
import { EntryPointSchema } from "../EntryPointSchema/types";

export interface SearchActionSchema extends BaseSchema {
  "@type": "SearchAction";
  target: string | EntryPointSchema;
  "query-input": string;
}
