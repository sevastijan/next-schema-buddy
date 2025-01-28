# next-schema-buddy

A simple and lightweight Schema.org implementation for Next.js applications. Easily add structured data to your Next.js pages with type-safe components.

## Features

- 🚀 Built for Next.js
- 💪 TypeScript support
- 🔄 Automatic schema aggregation
- 🎯 Server-side rendering ready
- 📦 Lightweight with zero dependencies

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
