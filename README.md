# gorth-ui

Shared React UI library.

## Install from GitHub

```bash
pnpm add gorth-ui@github:goraria/gorth-ui
```

Or via dependency alias in another project:

```json
{
  "dependencies": {
    "ui": "github:goraria/gorth-ui"
  }
}
```

## Usage

```tsx
import { Button } from 'gorth-ui';

export function Demo() {
  return <Button>Click me</Button>;
}
```

If you installed with alias `ui`, import from `ui` instead:

```tsx
import { Button } from 'ui';
```

## Development

```bash
pnpm install
pnpm build
```
