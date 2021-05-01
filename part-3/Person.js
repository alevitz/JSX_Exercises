function Person(props){

  let age = props.age > 18 ? "please go vote!" : "you must be 18";
  let name = props.name.length > 8 ? props.name.slice(0,6) : props.name;
  let hobbies =  props.hobbies.map(h => <li>{h}</li>); 

  return(<div>
  <p>Learn some info about this person.</p>
  <h3>{age}</h3>
  <h3>{name}</h3>
  <ul>
    {hobbies}
  </ul>
  </div>)
}