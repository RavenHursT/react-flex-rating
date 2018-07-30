const classNameBuilder = (defaultClassName, otherClassNameStr) => `${
defaultClassName || ``
  }${
  otherClassNameStr ?
    ` ${otherClassNameStr}` : ``
  }`

export default classNameBuilder