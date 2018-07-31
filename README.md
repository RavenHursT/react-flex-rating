# react-flex-rating

<!-- [![Travis][build-badge]][build] -->
[![npm version](https://img.shields.io/npm/v/react-flex-rating.svg)](https://www.npmjs.com/package/react-flex-rating)
<!-- [![Coveralls][coveralls-badge]][coveralls] -->
<!-- [build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square 
[build]: https://travis-ci.org/user/repo -->


<!-- [//] [coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo -->

A (semi)full-featured React rating component.

- Built w/ functional components
- Dynamic rating-icon count, value, maximum
- Allows for half-icon ratings
- Intuitive over-states (i.e. _both_ currently active icons and non-active icons will react to hover)
- Built w/ [SASS](https://sass-lang.com/) for easy, flexible, overriding of styles
- Allows for propagation of custom `className` property
- Plays nice w/ [material-ui 1.4.x](https://material-ui.com/)

Check out the demo here! https://23m6jr1v5y.codesandbox.io/

## Installation

```bash
yarn add react-flex-rating
```

In your [sass-enabled React app](https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc) include this component's .scss:
```css
@import "~react-flex-rating/lib/styles/index.scss";
```
(haven't figured out how to spit out compiled css using [nwb](https://github.com/insin/nwb)-components yet)

Add the component into your app somewhere:
```javascript
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FontIcon from 'material-ui/FontIcon'
import Rating from 'react-flex-rating'

// Inside React component render():
<MuiThemeProvider>
  <Rating
    {...{
      className: `custom-class`,
      value: rating,
      allowHalfs,
      maxValue,
      disabled,
      iconCount: starCount,
      activeIcon: (
        <FontIcon className="material-icons font-size-2-5">
          star
        </FontIcon>
      ),
      inactiveIcon: (
        <FontIcon className="material-icons font-size-2-5">
          star_border
        </FontIcon>
      ),
      onSelect: rating => this.setState({ rating })
    }} />
</MuiThemeProvider>
```
(Note: currently only built and tested w/ [material-ui 1.4.x](https://material-ui.com/) `FontIcon`. Not sure if it will work w/ other `ReactElement`s.)

## Component Properties:
- `value` (Number): Current value of the component.  Used to drive the rendering of "active" icons. This is passed into the firrst argument of the `onSelect` callback method.
- `allowHalfs` (Boolean): Allows for toggling between whole and half-icon selections.
- `maxValue` (Number): Maximum value that full icon selection will indicate.
- `disabled` (Boolean): Disables interaction w/ the component and sets appropriate classes for styling.
- `iconCount` (Number): Number of icons to render.
- `activeIcon` (ReactElement): Element to render in "active" state.
- `inactiveIcon` (ReactElement): Element to render in "inactive" state.
- `onSelect` (Function): Function that is called whenever a new rating value is selected.
