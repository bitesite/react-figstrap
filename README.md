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
    <Frame vertical gap={20} padding={10} alignItems="center" justifyContent="flex-end">
      ...
    </Frame>
  );
};
```

#### props

| prop | Description |
| --- | ----------- |
| `vertical` | *Optional* - When set to `true`, children are laid out vertically. If this is not specified, the default Frame will lay out children horizontally |
| `padding` | *Optional* - The amount of padding in pixels as an number. Unlike the plain old CSS version of FigStrap, the React version is not limited to certain padding sizes. So you can put whatever number you want here. |
| `gap` | *Optional* - The size of the gap between children in pixels as an number. Unlike the plain old CSS version of FigStrap, the React version is not limited to certain gap sizes. So you can put whatever number you want here.|
| `alignItems` | *Optional* - This directly translates to Flexbox `align-items`. Use any flexbox valid value like `center` or `flex-start`. The default value for this is `stretch`.|
| `justifyContent` | *Optional* - This directly translates to Flexbox `justify-content`. Use any flexbox valid value like `center` or `flex-start`. The default value for this is `flex-start`. |

#### Additional props

The `Frame` component is implemented using a `div` and [styled components](https://styled-components.com/). As such, you can pass any valid HTML attribute to the `Frame` and it will just apply it to the `div`.

#### Want a different element than a `div`?

The `Frame` component is implemented using a `div` and [styled components](https://styled-components.com/) so you're always going to get a `div` if you use the `Frame`. However, because it's built using styled components, you can decide to render other HTML elements instead using the `as` functionality of styled components.

e.g.

```
return (
  <Frame vertical padding={20} as='form'>
    ...
  </Frame>
);
```

The above will render a `form` rather than a `div`.

#### Extending the Frame

The `Frame` component is implemented using [styled components](https://styled-components.com/), so if you need to apply additional CSS or what to create another component based on a Frame, you can.

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

If you're a developer on this project and you want to create a new build and publish it:

1. Update the version number in `package.json`.
1. Build the output by running `npx webpack`
1. Package the output by running `npm pack`
1. Publish the package by running `npm publish --access public`