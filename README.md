Figma url: <https://www.figma.com/file/IGr2xoqcZX91CU7CDr4ZsI/Design-tokens?node-id=0%3A1>

<https://designsystemchecklist.com/category/design-tokens/>

# Basic Style Dictionary

This example code is bare-bones to show you what this framework can do. If you have the style-dictionary module installed globally, you can `cd` into this directory and run:

```bash
style-dictionary build
```

You should see something like this output:

```
Copying starter files...

Source style dictionary starter files created!

Running `style-dictionary build` for the first time to generate build artifacts.


scss
✔︎  build/scss/_variables.scss

android
✔︎  build/android/font_dimens.xml
✔︎  build/android/colors.xml

ios
✔︎  build/ios/StyleDictionaryColor.h
✔︎  build/ios/StyleDictionaryColor.m
✔︎  build/ios/StyleDictionarySize.h
✔︎  build/ios/StyleDictionarySize.m

ios-swift
✔︎  build/ios-swift/StyleDictionary.swift

ios-swift-separate-enums
✔︎  build/ios-swift/StyleDictionaryColor.swift
✔︎  build/ios-swift/StyleDictionarySize.swift
```

Pat yourself on the back, you have now built your first style dictionary! Moving on, take a look at what we have built. This should have created a build directory and it should look like this:

```
├── README.md
├── config.json
├── properties/
│   ├── color/
│       ├── base.json
│       ├── font.json
│   ├── size/
│       ├── font.json
├── build/
│   ├── android/
│      ├── font_dimens.xml
│      ├── colors.xml
│   ├── scss/
│      ├── _variables.scss
│   ├── ios/
│      ├── StyleDictionaryColor.h
│      ├── StyleDictionaryColor.m
│      ├── StyleDictionarySize.h
│      ├── StyleDictionarySize.m
│   ├── ios-swift/
│      ├── StyleDictionary.swift
│      ├── StyleDictionaryColor.swift
│      ├── StyleDictionarySize.swift
```

If you open `config.json` you will see there are 3 platforms defined: scss, android, ios. Each platform has a transformGroup, buildPath, and files. The buildPath and files of the platform should match up to the files what were built. The files built should look like these:

**Android**

```xml
<!-- font_dimens.xml -->
<resources>
  <dimen name="size_font_small">12.00sp</dimen>
  <dimen name="size_font_medium">16.00sp</dimen>
  <dimen name="size_font_large">32.00sp</dimen>
  <dimen name="size_font_base">16.00sp</dimen>
</resources>

<!-- colors.xml -->
<resources>
  <color name="color_base_gray_light">#ffcccccc</color>
  <color name="color_base_gray_medium">#ff999999</color>
  <color name="color_base_gray_dark">#ff111111</color>
  <color name="color_base_red">#ffff0000</color>
  <color name="color_base_green">#ff00ff00</color>
  <color name="color_font_base">#ffff0000</color>
  <color name="color_font_secondary">#ff00ff00</color>
  <color name="color_font_tertiary">#ffcccccc</color>
</resources>
```

**SCSS**

```scss
// variables.scss
$color-base-gray-light: #cccccc;
$color-base-gray-medium: #999999;
$color-base-gray-dark: #111111;
$color-base-red: #ff0000;
$color-base-green: #00ff00;
$color-font-base: #ff0000;
$color-font-secondary: #00ff00;
$color-font-tertiary: #cccccc;
$size-font-small: 0.75rem;
$size-font-medium: 1rem;
$size-font-large: 2rem;
$size-font-base: 1rem;
```

**iOS**

```objc
#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.067f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:1.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:1.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.800f blue:0.800f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
```

Pretty nifty! This shows a few things happening:

1. The build system does a deep merge of all the property JSON files defined in the `source` attribute of `config.json`. This allows you to split up the property JSON files however you want. There are 2 JSON files with `color` as the top level key, but they get merged properly.
1. The build system resolves references to other style properties. `{size.font.medium.value}` gets resolved properly.
1. The build system handles references to property values in other files as well as you can see in `properties/color/font.json`.

Now let's make a change and see how that affects things. Open up `properties/color/base.json` and change `"#111111"` to `"#000000"`. After you make that change, save the file and re-run the build command `style-dictionary build`. Open up the build files and take a look.

**Huzzah!**

Now go forth and create! Take a look at all the built-in [transforms](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms) and [formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats).

<h1 align="center">
  <br><br>
   👋 Welcome to Pattern Library Skeleton!
  <br>
</h1>

<h4 align="center">A awesome design system for your products and experiences!</h4>

<p align="center">
  <a href="https://app.netlify.com/sites/pattern-library-skeleton/deploys">
    <img src="https://api.netlify.com/api/v1/badges/222e8120-908e-40fe-9f3a-c59e694ed4b8/deploy-status" alt="Netlify Status">
  </a>
</p>

<p align="center">
  <a href="#fire-overview">Overview</a> •
  <a href="#sparkles-getting-started">Getting Started</a> •
  <a href="#triangular_ruler-architecture">Architecture</a> •
  <a href="#nail_care-guidelines">Guidelines</a> •
  <a href="#rainbow-theming">Theming</a> •
  <a href="#pray-testing-the-application">Testing</a> •
  <a href="#mailbox-how-to-use-in-a-project">Distribution</a>
</p>

<p align="center">
    <img src="https://user-images.githubusercontent.com/1427623/73655313-07e57500-468e-11ea-8534-b22b8d0cbda7.gif"
         alt="Adevinta Storybook">
</p>

## :fire: Overview

We use of the best tools to improve the workflow to allow you to create an awesome library of components!

- [ReactJs](https://facebook.github.io/react/) v16
- Type checking with [PropTypes](https://www.npmjs.com/package/prop-types)
- [SASS](https://sass-lang.com/) for styling components and application
- Compiled of modern JavaScript with [Babel](https://github.com/babel/babel) and bundle with [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/) and [Testing library](https://testing-library.com/) for unit/ui testing
- Automate Git hooks with [Husky](https://github.com/typicode/husky)
- Code linting using [Eslint](https://github.com/eslint/eslint)
- Code formatter using [Prettier](https://prettier.io/)
- Developing isolated UI components with [Storybook](https://storybook.js.org/)

## :sparkles: Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

#### Installing

You can clone our Git repository:
`$ git clone git@github.com:klaufel/sui-components-datepicker.git`

#### Wiring up your development environment

Setting up, is as easy as running:

`$ npm install`

This command will install all the required dependencies. Please note that `npm install` is only required on your first start, or in case of updated dependencies.

#### Initializing Storybook

Once all the dependencies are installed, you can run `$ npm run storybook` to initialize your development server using [webpack-dev-server](https://webpack.github.io/) middleware.

## :triangular_ruler: Architecture

Based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles, methodology for creating design systems. There are five distinct levels of components:

- Atomic Design component structure:
  - Atoms
  - Molecules
  - Organism
  - Templates
  - Pages

When we use the library, the maximum level of component that we are going to have would be an `organism`, the rest of the `templates`and `pages` components are built in the application that imports the library.

### Source project structure

```
└── src
    ├── components
    │ ├── atoms
    │ ├── molecules
    │   └── organism
    ├── docs
    ├── styles
    └── index.js (entry point)
```

- `src`: The place where to put our application source code
  - `components` Add your components here! This folder is divided from [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.
  - `docs` Add documentation as stories for design system.
  - `styles` Folder to add global styles and theme to build components.
  - `index.js` Entry point, import all components and export to generate package to use in project as a dependency.

---

##### Example of `component` structure

```
└── mycomponent
    ├── __mocks__
    │   └── mycomponent.mock.js
    ├── __stories__
    │   └── mycomponent.stories.{js|mdx}
    ├── __tests__
    │ ├── __snapshots__
    │ │   └── mycomponent.test.js.snap
    │   └── mycomponent.test.js
    ├── index.scss
    └── index.js
```

- **mycomponent**: Folder which contains our component.
  - `__mocks__`: Folder to contains the mocks logic.
    - `mycomponent.mock.js`: File for mock compononet to use in your stories or tests.
  - `__stories__`: Folder to contains the stories for Storybook.
    - `mycomponent.stories.js`: Contains the stories of component for Storybook
  - `__tests__`: Folder to contains the tests of component.
    - `__snapshots__`: Folder to contains the snapthots tests, autogenerated for jest.
      - `mycomponent.test.js.snap`: Snapshot file, autogenerated for jest.
    - `mycomponent.test.js`: Contains the test of component.
  - `index.js`: Contains the React component, HTML or other imports from ui-library.
  - `index.scss`: Contain the styles of component.

## :nail_care: Guidelines

#### Styles

Styles must follow the [SUIT convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).

#### Linting / Formatter

Use [sui-lint](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint), CLI to lint your code and make it compliant. It provides:

- Same js and sass style of code across all company.
- Linting rules a reference package, not duplicated linting config in every project.
- Implemented as a reusable CLI.

###### Linting

`$ npm run lint` Find problems in your code `(js and sass)`

`$ npm run lint:js` Find problems in your code `(only js)`

`$ npm run lint:sass` Find problems in your code `(only sass)`

###### Formatter

`$ npm run prettier:check` Find format problems in your code.

`$ npm run prettier:write` Fix format problems in your code.

#### Git hooks

There is a hook to pre-commit with [Husky](https://github.com/typicode/husky), will run `$ npm run prettier:write`, so that all the code pushed is complies with the established rules!

## :rainbow: Theming

##### Example of `theme` structure

```
└── styles
 └── lib
     └── themes
         ├── mytheme
            │   ├── _components.scss
            │   ├── _fonts.scss
            │   ├── _variables.scss
            │   └── _index.scss
            └── _index.scss (import your actual theme)
```

- **mytheme**: Folder which the theme config.
  - `_components.scss`: File to overwrites styles specifically at the component level.
  - `_fonts.scss`: Import fonts to the theme.
  - `_variables.scss`: Overwrites the global variables of the theme.
  - `_index.scss`: Entry point file. Import all files in your theme (components, fonts, variables).

The global variables by default are obtained from library: `@schibstedspain/sui-theme`

In the file `lib/_index.scss` , they are imported directly:

```
@import '~@schibstedspain/sui-theme/lib/settings-compat-v7/index';
@import '~@schibstedspain/sui-theme/lib/index';
```

To import a theme, it must currently be done manually `(see TODO below)`. In the file `lib/theme/_index.scss`, import the theme you need.

`Example:`

```
@import 'adevinta/index';
```

##### Design systems deployed with themes

- Default theme (SUI): [https://sui-components-datepicker-sui.netlify.com/](https://sui-components-datepicker-sui.netlify.com/)

- Adevinta theme: [https://sui-components-datepicker.netlify.com/](https://sui-components-datepicker.netlify.com/)

- Milanuncios theme: [https://sui-components-datepicker-milanuncios.netlify.com/](https://sui-components-datepicker-milanuncios.netlify.com/)

`TODO: Make selector for dynamic theme change through Storybook using SASS theme. Currently, it is necessary to modify the import of the current theme. In the current system of @schibstedspain/sui-theme the themes of each marketplace are being imported, we would have to do it that way but with specificity to each component, using the design tokens for components.`

## :pray: Testing the application

[Jest](https://jestjs.io/), a delightful javascript testing framework and [Testing Library](https://testing-library.com/) builds on top of DOM testing library by adding APIs for working with React components.

#### Running your tests

`$ npm run test` Will perform your unit testing.

`$ npm run test:update` Will perform your unit testing and update snapshots.

`$ npm run test:watch` Will perform your unit testing and watchers tests.

`$ npm run test:coverage` Will perform your unit testing and show coverage.

`$ npm run test:coverage-web` Will perform your unit testing and show coverage and open report in your default browser.

#### Git hooks

There is a hook to pre-push with [Husky](https://github.com/typicode/husky), will run `$ npm run test`, so that all the code pushed works correctly!

## :mailbox: How to use in a project

`TODO: Package the library so it can be used by other applications with the theme config`
