import { BaseSchema } from "../../../types";
import { OrganizationSchema } from "../OrganizationSchema/types";
import { PersonSchema } from "../PersonSchema/type";

export type ArticleType =
  | "Article"
  | "NewsArticle"
  | "BlogPosting"
  | "TechArticle"
  | "ScholarlyArticle"
  | "Report"
  | "SocialMediaPosting";

export interface ArticleSchema extends BaseSchema {
  "@type": ArticleType;
  headline: string;
  description?: string;
  articleBody?: string;
  image?:
    | string
    | string[]
    | {
        "@type": "ImageObject";
        url: string;
        width?: number;
        height?: number;
        caption?: string;
      };
  author:
    | PersonSchema
    | PersonSchema[]
    | OrganizationSchema
    | OrganizationSchema[];
  publisher: OrganizationSchema;
  datePublished: string;
  dateModified?: string;
  url?: string;
  mainEntityOfPage?: string;
  keywords?: string | string[];
  articleSection?: string;
  wordCount?: number;
  inLanguage?: string;
  copyrightYear?: number;
  copyrightHolder?: PersonSchema | OrganizationSchema;
  dateline?: string;
  printEdition?: string;
  printColumn?: string;
  printSection?: string;
  printPage?: string;
  isAccessibleForFree?: boolean;
  alternativeHeadline?: string;
  thumbnailUrl?: string;
  speakable?: {
    "@type": "SpeakableSpecification";
    cssSelector?: string[];
    xpath?: string[];
  };
  video?: {
    "@type": "VideoObject";
    name: string;
    description?: string;
    thumbnailUrl?: string;
    uploadDate: string;
    duration?: string; // ISO 8601
    contentUrl?: string;
    embedUrl?: string;
  }[];
}

export interface ArticleSchemaProps {
  data: Omit<ArticleSchema, "@context" | "@type"> & {
    "@type"?: ArticleType;
  };
}
