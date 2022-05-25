function Box(props) {
    return (
      <div className="container" style={{ backgroundColor: props.myColor, border: `2px solid ${props.borderColor}` }}></div>
    )
  }

  export default Box;