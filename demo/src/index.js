import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import Rating from '../../src/index'
import './index.scss'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const starCounts = [3, 4, 5, 6, 10, 20]
const maxValues = [10, 100, 1000, 10000]

class App extends React.Component {
  static initialState = {
    rating: 4,
    starCount: 5,
    maxValue: 10,
    allowHalfs: true,
    disabled: false
  }
  constructor(props) {
    super(props)
    this.state = { ...App.initialState }
  }

  render() {
    const {
      rating,
      starCount,
      maxValue,
      allowHalfs,
      disabled
    } = this.state

    return <MuiThemeProvider>
      <div style={styles}>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        <div>
          <SelectField
            floatingLabelText="Star Count"
            value={starCount}
            onChange={(e, i, starCount) => this.setState({ starCount })} >
            {
              starCounts.map((value, key) => <MenuItem
                {...{
                  key,
                  value,
                  primaryText: value
                }} />)
            }
          </SelectField>
          &nbsp;&nbsp;
          <SelectField
            floatingLabelText="Max Value"
            value={maxValue}
            onChange={(e, i, maxValue) => this.setState({ maxValue })} >
            {
              maxValues.map((value, key) => <MenuItem
                {...{
                  key,
                  value,
                  primaryText: value
                }} />)
            }
          </SelectField>
          &nbsp;&nbsp;
          <SelectField
            floatingLabelText="Allow Half Values"
            value={allowHalfs}
            onChange={(e, i, allowHalfs) => this.setState({ allowHalfs })} >
            <MenuItem
              {...{
                value: true,
                primaryText: `true`
              }} />
            <MenuItem
              {...{
                value: false,
                primaryText: `false`
              }} />
          </SelectField>
          &nbsp;&nbsp;
          <SelectField
            floatingLabelText="Disabled"
            value={disabled}
            onChange={(e, i, disabled) => this.setState({ disabled })} >
            <MenuItem
              {...{
                value: true,
                primaryText: `true`
              }} />
            <MenuItem
              {...{
                value: false,
                primaryText: `false`
              }} />
          </SelectField>
        </div>
        <Rating {...{
          className: `custom-class`,
          value: rating,
          allowHalfs,
          maxValue,
          disabled,
          iconCount: starCount,
          activeIcon: <FontIcon
            className="material-icons font-size-2-5" >star</FontIcon>,
          inactiveIcon: <FontIcon
            className="material-icons font-size-2-5" >star_border</FontIcon>,
          onSelect: rating => this.setState({ rating })
        }} />
        <div>
          <label>Rating Value:</label><span>{rating}</span>
        </div>
      </div>
    </MuiThemeProvider>
  }
}

render(<App />, document.getElementById('demo'))
