import React from 'react'
import classNameBuilder from './util/class-name-builder.util'
import noop from './util/noop.util'

const handleMove = (e, { value, onMove = noop }) => onMove(e, value)
const handleSelect = (e, { value, onSelect = noop }) => onSelect(e, value)
const generateClasses = ({
                           active = ``,
                           inactive = ``,
                           half = ``,
                           highlight = ``
                         }) =>
  [
    `${active && `${RatingIcon.ACTIVE_STATE_KEY} `}`,
    `${inactive && `${RatingIcon.INACTIVE_STATE_KEY} `}`,
    `${half && `${RatingIcon.HALF_STATE_KEY} `}`,
    `${highlight && `${RatingIcon.HIGHLIGHT_STATE_KEY} `}`
  ].join(``)

const RatingIcon = props => {
  const {
    activeIcon,
    inactiveIcon,
    active,
    inactive,
    half,
    highlight,
    highlightBackgroundIcon
  } = props
  const backgroundIcon = inactiveIcon
  const displayIcon =
    inactive && half && highlight
      ? inactiveIcon
      : active || half
      ? activeIcon
      : inactiveIcon

  const iconContainerStyle = {
    display: "inline-block",
    position: "absolute",
    overflow: "hidden",
    top: 0,
    left: 0,
    width: `${half ? 50 : 100}%`
  }

  return (
    <span
      {...{
        style: {
          display: "inline-block",
          position: "relative"
        },
        className: classNameBuilder(
          `rating-icon`,
          generateClasses({
            active,
            inactive,
            half,
            highlight
          })
        ),
        onMouseMove: e => handleMove(e, props),
        onTouchMove: e => handleMove(e, props),
        onClick: e => {
          e.preventDefault()
          return handleSelect(e, props)
        },
        onTouchEnd: e => {
          e.preventDefault()
          return handleSelect(e, props)
        }
      }}
    >
      <span
        {...{
          className: classNameBuilder(
            `background-icon`,
            highlightBackgroundIcon ? RatingIcon.HIGHLIGHT_STATE_KEY : ``
          )
        }}
      >
        {backgroundIcon}
      </span>
      <span
        {...{
          className: `display-icon`,
          style: iconContainerStyle
        }}
      >
        {displayIcon}
      </span>
    </span>
  )
}

RatingIcon.ACTIVE_STATE_KEY = `active`
RatingIcon.INACTIVE_STATE_KEY = `inactive`
RatingIcon.HALF_STATE_KEY = `half`
RatingIcon.HIGHLIGHT_STATE_KEY = `highlight`

export default RatingIcon
