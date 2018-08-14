import React from 'react'
import { render } from 'react-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Rating from '../../src/index'
import './styles/index.scss'

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
    return <div style={styles}>
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
      <form className="selects" autoComplete="off">
        <FormControl>
          <InputLabel shrink htmlFor="star-count">
            Star Count
          </InputLabel>
          <Select {...{
            value: starCount,
            name: `star-count`,
            onChange: ({target: {value: starCount}}) => this.setState({ starCount })
          }} >
            {
              starCounts.map((value, key) => <MenuItem
                {...{
                  key,
                  value
                }} >{value}</MenuItem>)
            }
          </Select>
        </FormControl>
          &nbsp;&nbsp;
        <FormControl>
          <InputLabel shrink htmlFor="max-value">
            Maximum Value
          </InputLabel>
          <Select
            {...{
              value: maxValue,
              name: `max-value`,
              onChange: ({target: {value: maxValue}}) => this.setState({ maxValue })
            }} >
            {
              maxValues.map((value, key) => <MenuItem
                {...{
                  key,
                  value
                }} >{value}</MenuItem>)
            }
          </Select>
        </FormControl>
          &nbsp;&nbsp;
        <FormControl>
          <InputLabel shrink htmlFor="allow-halves">
            Allow Halves
          </InputLabel>
          <Select
            {...{
              value: allowHalfs ? 1 : 0,
              name: `allow-halves`,
              onChange: ({target: {value: allowHalfs}}) => this.setState({
                allowHalfs: allowHalfs === 1
              })
            }} >
            <MenuItem
              {...{
                value: 1
              }} >True</MenuItem>
            <MenuItem
              {...{
                value: 0
              }} >False</MenuItem>
          </Select>
        </FormControl>
          &nbsp;&nbsp;
        <FormControl>
          <InputLabel shrink htmlFor="disabled">
            Disabled
          </InputLabel>
          <Select
            {...{
              value: disabled ? 1: 0,
              name: `disabled`,
              onChange: ({target: {value: disabled}}) => this.setState({
                disabled: disabled === 1
              })
            }} >
            <MenuItem
              {...{
                value: 1
              }}>True</MenuItem>
            <MenuItem
              {...{
                value: 0
              }} >False</MenuItem>
          </Select>
        </FormControl>
      </form>
      <h2>Plays Nice w/ Material-Ui Icons!</h2>
      <Rating {...{
        className: `custom-class`,
        value: rating,
        allowHalfs,
        maxValue,
        disabled,
        iconCount: starCount,
        activeIcon: <Icon
          className="material-icons font-size-2-5" >star</Icon>,
        inactiveIcon: <Icon
          className="material-icons font-size-2-5" >star_border</Icon>,
        onSelect: rating => this.setState({ rating })
      }} />
      <div>
        <label>Rating Value:</label><span>{rating}</span>
      </div>
      <h2>HTML-Entity Icons</h2>
      <Rating {...{
        className: `html-entities-rating`,
        value: rating,
        allowHalfs,
        maxValue,
        disabled,
        iconCount: starCount,
        activeIcon: <span>&#9733;</span>,
        inactiveIcon: <span>&#9734;</span>,
        onSelect: rating => this.setState({ rating })
      }} />
    </div>
  }
}

render(<App />, document.getElementById('demo'))
