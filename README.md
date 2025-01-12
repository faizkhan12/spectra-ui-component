# SPECTRA UI COMPONENT

Welcome to the Spectra UI Component! This repository contains a collection of reusable and customizable UI components built with React.JS.

## Components

Available Components

This library includes the following components, each with multiple variants:

Switch

Button

Input

Select

Radio

Loader

Tabs

Alert

Modal

Theme Provider

## Installation

To use these components in your project, install the package via npm or yarn:

- npm install spectra-ui-component
- yarn add spectra-ui-component

## Usage

Basic Usage

Import and use components as follows:

```
import { Switch, Button, Input } from 'spectra-ui-component';

function App() {
  return (
    <div>
      <Switch label="Basic" onChange={function Ki(){}} />
      <Button label="Click Me" variant="contained" />
      <Input label="Name" placeholder="Enter text here" />
    </div>
  );
}
```

## Example Variants

Each component comes with multiple variants to suit different use cases. Below are some examples:

### Switch

```
<Switch checked={true} onChange={() => {}} />
<Switch checked={false} orientation="vertical" />
```

### Button
```
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>
<Button disabled>Disabled</Button>
```


### Customization

All components are designed to be customizable via props. You can pass custom className, or additional props to tailor them to your design needs.

### Documentation

Detailed documentation for each component, including props and usage examples, can be found in the [Storybook](https://6783b43722481f8a2d6e8c29-beeqllisbe.chromatic.com/).

### Contributing

We welcome contributions to improve this library! Please follow the steps below:

* Fork the repository.

* Create a new branch for your feature or bugfix:

* git checkout -b feature/my-new-feature

* Commit your changes:

* git commit -m "Add some feature"

* Push to the branch:

* git push origin feature/my-new-feature

* Open a pull request.
