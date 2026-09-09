# Public Assets Directory

Place your local images, logos, and icons in this folder:

```text
public/
├── logos/          <- Put your brand logo files here (e.g. logo.png, logo.svg)
├── images/         <- Put your team, hero, service, and project photos here
├── icons/          <- Put custom icons or SVGs here
└── favicon.ico     <- Site favicon
```

## How to use them in your Next.js components:

In Next.js, files inside the `public` folder are automatically served from the root URL (`/`).

### Examples:

1. **For a logo placed in `public/logos/logo.png`**:

   ```tsx
   <Image
     src="/logos/logo.png"
     alt="Baystate Planning Logo"
     width={250}
     height={80}
   />
   ```

2. **For a photo placed in `public/images/hero.jpg`**:

   ```tsx
   <Image
     src="/images/hero.png"
     alt="Hero background"
     fill
     className="object-cover"
   />
   ```

3. **In normal `<img>` or background CSS**:
   ```html
   <img src="/logos/logo.svg" alt="Logo" />
   ```
