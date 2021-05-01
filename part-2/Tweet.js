function Tweet(props){
  return (<div className="tweet">
  <span className="username">{props.username}</span> 
  <span>{props.name}</span>
  <span className="date">{props.date}</span>
  <p>{props.message}</p>
  </div>);
}