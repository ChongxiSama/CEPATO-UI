# @chongxi/cepato-ui

CEPATO-UI — A design system inspired by Lone Trail (Rhine Lab).

## Installation

```bash
pnpm add @chongxi/cepato-ui
```

## Setup

1. Add the preset to your `tailwind.config.ts`:

```ts
import preset from '@chongxi/cepato-ui/preset'

export default {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@chongxi/cepato-ui/src/**/*.{ts,tsx}',
  ],
  // ...
}
```

2. Import the CSS variables in your `globals.css`:

```css
@import "@chongxi/cepato-ui/src/tokens/variables.css";
```

## Components

- `Tag`: Contextual labels (variants: default, accent, dark, outline)
- `RpStamp`: Rhine Lab / RP stamp
- `Divider`: Standard themed horizontal line
- `SectionHeader`: Titled section divider with numbering
- `ChapterHeader`: Card header with chapter info and reference codes
- `StripeFooter`: Rhine Lab three-color stripe
- `PaperCard`: Texture container with watermark support
