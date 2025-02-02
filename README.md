# next-schema-buddy

A simple and lightweight Schema.org implementation for Next.js applications. Easily add structured data to your Next.js pages with type-safe components.

## Features

- 🚀 Built for Next.js
- 💪 TypeScript support
- 🔄 Automatic schema aggregation
- 🎯 Server-side rendering ready
- 📦 Lightweight with zero dependencies

## Supported Schema Types

### Available Now ✨

- 🌐 WebSite Schema
- 🏢 Organization Schema
- 📦 Product Schema
- 🔍 SearchAction Schema (as part of WebSite)
- 📍 LocalBusiness Schema
- 📝 Article Schema
- ⭐ Review Schema

### Coming Soon 🚀

- 📑 BreadcrumbList Schema
- ❓ FAQ Schema
- 📽️ Video Schema
- 🖼️ ImageObject Schema
- 📅 Event Schema
- 🍽️ Restaurant Schema
- 👤 Person Schema
- 💼 JobPosting Schema
- 📱 SoftwareApplication Schema
- 🎬 Movie Schema
- 📚 Book Schema
- 🏪 Store Schema
- 🛍️ Offer Schema (standalone)
- 📊 AggregateRating Schema (standalone)

## Installation

```bash
npm install next-schema-buddy
# or
yarn add next-schema-buddy
# or
pnpm add next-schema-buddy
```

## Usage

1. First, add the `SchemaMarkup` component to your root layout:

```tsx
// app/layout.tsx
import { SchemaMarkup } from "next-schema-buddy";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SchemaMarkup />
      </body>
    </html>
  );
}
```

2. Then use schema components in your pages:

```tsx
// app/page.tsx
import {
  WebsiteSchema,
  OrganizationSchema,
  ProductSchema,
} from "next-schema-buddy";

export default function Page() {
  return (
    <>
      <WebsiteSchema
        data={{
          name: "My Website",
          url: "https://example.com",
          description: "Website description",
        }}
      />

      <OrganizationSchema
        data={{
          name: "Company Name",
          url: "https://example.com",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png",
            width: 180,
            height: 60,
          },
          sameAs: [
            "https://facebook.com/company",
            "https://twitter.com/company",
          ],
        }}
      />

      {/* Your page content */}
    </>
  );
}
```

## Available Schemas

### WebsiteSchema

For marking up your website information:

```tsx
<WebsiteSchema
  data={{
    name: "Website Name",
    url: "https://example.com",
    description: "Optional description",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }}
/>
```

### OrganizationSchema

For company/organization information:

```tsx
<OrganizationSchema
  data={{
    name: "Organization Name",
    url: "https://example.com",
    logo: {
      "@type": "ImageObject",
      url: "https://example.com/logo.png",
      width: 180,
      height: 60,
    },
    sameAs: ["https://facebook.com/org", "https://twitter.com/org"],
  }}
/>
```

### ProductSchema

For product pages:

```tsx
<ProductSchema
  data={{
    name: "Product Name",
    description: "Product description",
    image: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    brand: {
      "@type": "Organization",
      name: "Brand Name",
    },
    offers: {
      "@type": "Offer",
      price: 199.99,
      priceCurrency: "USD",
      availability: "InStock",
    },
  }}
/>
```

### LocalBusinessSchema

```tsx
<LocalBusinessSchema
  data={{
    name: "My Local Store",
    description: "The best local store in town",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "City",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+1-234-567-8900",
    priceRange: "$$",
  }}
/>
```

### ArticleSchema

```tsx
<ArticleSchema
  data={{
    "@type": "NewsArticle",
    headline: "Breaking News: Major Scientific Discovery",
    description: "Scientists have made a groundbreaking discovery...",
    articleBody: "Full article content goes here...",
    image: [
      "https://example.com/article-hero.jpg",
      "https://example.com/article-thumbnail.jpg",
    ],
    author: {
      "@type": "Person",
      name: "John Doe",
      url: "https://example.com/authors/johndoe",
    },
    publisher: {
      "@type": "Organization",
      name: "Example News",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png",
      },
    },
    datePublished: "2024-02-02T09:00:00+00:00",
    dateModified: "2024-02-02T12:30:00+00:00",
    url: "https://example.com/article/breaking-news",
    mainEntityOfPage: "https://example.com/article/breaking-news",
    keywords: ["science", "discovery", "research"],
    articleSection: "Science",
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-headline", ".article-description"],
    },
    video: [
      {
        "@type": "VideoObject",
        name: "Interview with Scientists",
        description: "Watch our exclusive interview...",
        thumbnailUrl: "https://example.com/video-thumbnail.jpg",
        uploadDate: "2024-02-02T10:00:00+00:00",
        duration: "PT5M",
        embedUrl: "https://example.com/embed/video123",
      },
    ],
  }}
/>
```

### ReviewSchema

```tsx
<ReviewSchema
  data={{
    name: "Crazy phone - my review",
    reviewBody: "Detailed review...",
    author: {
      "@type": "Person",
      name: "John Smith",
      url: "https://example.com/authors/john-smith",
    },
    datePublished: "2024-02-02T10:00:00+00:00",
    dateModified: "2024-02-02T12:00:00+00:00",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "Product",
      name: "SuperPhone 15 Pro",
      image: "https://example.com/phone-image.jpg",
      description: "Newest Iphone ",
      brand: {
        "@type": "Brand",
        name: "SuperPhone",
      },
      offers: {
        "@type": "Offer",
        price: 999.99,
        priceCurrency: "USD",
        availability: "InStock",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Reviews",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png",
      },
    },
    pros: ["Long time work on battery", "Great camera"],
    cons: ["High price", "No headphone plug"],
  }}
/>
```

## Output

The schema markup will be rendered as a single `<script>` tag with type `application/ld+json`:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "My Website",
        "url": "https://example.com"
      },
      {
        "@type": "Organization",
        "name": "Company Name",
        "url": "https://example.com"
      }
    ]
  }
</script>
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
