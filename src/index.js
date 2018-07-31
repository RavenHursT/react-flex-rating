import React from 'react'
import RatingIcon from './rating-icon'
import classNameBuilder from './util/class-name-builder.util'
import noop from './util/noop.util'

export default class ReactFlexRating extends React.Component {
  static initialState = {
    highlightCount: 0,
    hoverPercent: 0
  }
  static defaultProps = {
    iconCount: 5,
    value: 0,
    maxValue: 100,
    allowHalfs: false,
    disabled: false
  }
  constructor(props) {
    super(props)
    this.state = { ...ReactFlexRating.initialState }

    this.renderIcons = this.renderIcons.bind(this)
    this.getIconConfigs = this.getIconConfigs.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  getIconConfigs() {
    const {
      allowHalfs = ReactFlexRating.defaultProps.allowHalfs,
      iconCount = ReactFlexRating.defaultProps.iconCount,
      value = ReactFlexRating.defaultProps.value,
      maxValue = ReactFlexRating.defaultProps.maxValue
    } = this.props
    const {
      highlightCount,
      hoverPercent
    } = this.state
    const quotient = maxValue / iconCount
    const iconConfigs = []

    let lastActiveValue = 0
    for (let i = 1; i <= iconCount; i++) {
      const sliceValue = i * quotient
      const active = isActive(sliceValue, value)
      lastActiveValue = active ? sliceValue : lastActiveValue
      const highlightHalfOverride = allowHalfs &&
        highlightCount === i &&
        hoverPercent < 0.5 && i * quotient <= value
      const iconStateKey = active && !highlightHalfOverride ?
        RatingIcon.ACTIVE_STATE_KEY :
        (
          isHalf(
            allowHalfs,
            sliceValue,
            lastActiveValue,
            quotient,
            value
          ) || highlightHalfOverride ?
            RatingIcon.HALF_STATE_KEY :
            RatingIcon.INACTIVE_STATE_KEY
        )
      iconConfigs.push({
        [iconStateKey]: true,
        half: (
          iconStateKey === RatingIcon.HALF_STATE_KEY ||
          (
            iconStateKey === RatingIcon.INACTIVE_STATE_KEY &&
            highlightCount === i && hoverPercent < .5
          )
        ) ? true : undefined,
        highlight: highlightCount >= i || undefined,
        highlightBackgroundIcon: highlightCount > i || (highlightCount === i && hoverPercent >= .5),
        value: sliceValue
      })
    }
    return iconConfigs
  }

  static calculateInteractPercentage(event, {allowHalfs}) {
    if (!allowHalfs) {
      return 1
    }
    const clientX = event.nativeEvent.type.indexOf("touch") > -1
      ? event.nativeEvent.type.indexOf("touchend") > -1
        ? event.changedTouches[0].clientX
        : event.touches[0].clientX
      : event.clientX;

    const targetRect = event.target.getBoundingClientRect();
    const delta = clientX - targetRect.left;

    // Returning 0 if the delta is negative solves the flickering issue
    return delta < 0 ? 0 : delta / targetRect.width;
  }

  renderIcons() {
    const {
      activeIcon,
      inactiveIcon,
      halfIcon,
      highlightIcon,
      disabled
    } = this.props
    const iconConfigs = this.getIconConfigs()
    return iconConfigs.map(
      (config, key) => <RatingIcon
        {...{
          activeIcon,
          inactiveIcon,
          halfIcon,
          highlightIcon,
          key,
          onMove: !disabled ? this.onMove : undefined,
          onSelect: !disabled ? this.onSelect : undefined,
          ...config
        }} />
    )
  }

  onMove(e, value) {
    const {
      iconCount,
      maxValue
    } = this.props
    const quotient = maxValue / iconCount
    const hoverPercent = ReactFlexRating.calculateInteractPercentage(e, this.props)
    this.setState({
      highlightCount: value / quotient,
      hoverPercent
    })
  }

  onSelect(e, newValue) {
    const {
      iconCount,
      maxValue,
      onSelect = noop
    } = this.props

    const interactPercentage = ReactFlexRating.calculateInteractPercentage(e, this.props)
    newValue = interactPercentage < .5 ?
      newValue - ((maxValue / iconCount) / 2) :
      newValue

    onSelect(newValue, e)

    this.setState(...ReactFlexRating.initialState)
  }

  render() {
    const {
      className,
      disabled
    } = this.props

    return <span
      {...{
        style: {
          display: `inline-block`,
          direction: `ltr`
        },
        className: classNameBuilder(
          classNameBuilder(`rating`, disabled && `disabled`),
          className
        ),
        onMouseLeave: () => !disabled && this.setState({
          ...ReactFlexRating.initialState
        })
      }}>
      {this.renderIcons()}
    </span>
  }
}

const isHalf = (halfs, sliceValue, lastActiveValue, quotient, value) => (
  halfs &&
  (sliceValue - lastActiveValue === quotient) &&
  (sliceValue > value) &&
  value % quotient
)

const isActive = (sliceValue, value) => sliceValue <= value