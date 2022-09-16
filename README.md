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

### Frame (Auto-layout Frame)

The main component of Figstrap is an Auto-layout Frame. When a designer uses a Frame in Figma and sets it to Auto-layout, you can use the Frame component in your React code to achieve the same effect.

e.g.

```
import { Frame } from '@bitesite/react-figstrap';

const MyComponent = () => {

  return (
    <Frame vertical gap={20} padding={10}>
      ...
    </Frame>
  );
};
```

#### props

| prop | Description |
| --- | ----------- |
| `vertical` | When set to `true`, children are laid out vertically. If this is not specified, the default Frame will lay out children horizontally |
| `padding` | The amount of padding in pixels as an number. Unlike the plain old CSS version of FigStrap, the React version is not limited to certain padding sizes. So you can put whatever number you want here. |
| `gap` | The size of the gap between children in pixels as an number. Unlike the plain old CSS version of FigStrap, the React version is not limited to certain gap sizes. So you can put whatever number you want here.|

#### Extending the Frame

The Frame is implemented using [styled components](https://styled-components.com/), so if you need to apply additional CSS or what to create another component based on a Frame, you can.

##### Adding additional CSS

e.g.

```
return (
  <Frame vertical padding={20} style={{background: 'black'}}>
    ...
  </Frame>
);
```

##### Adding CSS Classes

e.g.

```
return (
  <Frame className='product-list' vertical padding={20}>
    ...
  </Frame>
);
```

##### Creating a new Frame Component

e.g.

```
import styled from 'styled-components';
import { Frame } from '@bitesite/react-figstrap';

const MyFancyFrame = styled(Frame)`
  border-radius: 3px;
  border: 2px solid #000000;
  background: #efefef;
`;

export default MyFancyFrame;
```


## Building

1. `npx webpack`
2. `npm pack`