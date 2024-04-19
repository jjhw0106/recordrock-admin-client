import 'css/common.css';

function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div className="card-style" style={{backgroundColor: backgroundColor || "white"}}
      // style={{
      //   margin: 8,
      //   padding: 8,
      //   borderRadius: 8,
      //   boxShadow: "0px 0px 4px grey",
      //   backgroundColor: backgroundColor || "white"
      // }}
    >
      {/* specialization */}
      {title && <h1>{title}</h1>}
      {/* containment */}
      {children}

    </div>
  )
}

export default Card;