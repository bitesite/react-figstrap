# React FigStrap

React components for [FigStrap](https://github.com/bitesite/figstrap).

## Installation

### Install the NPM Package

Using yarn?

```
yarn add @bitesite/react-figstrap
```

Or NPM?

```
npm install @bitesite/react-figstrap
```

### Install Peer Dependencies

You'll also have to make sure you're using `react`, and `styled-components`:

```
yarn add react styled-components
```

## Usage

e.g.

```
import { Frame } from 'react-figstrap';

const MyComponent = () => {

  return (
    <Frame vertical gap={20} padding={10}>
      ...
    </Frame>
  );
};
```

## Building

1. `npx webpack`
2. `npm pack`