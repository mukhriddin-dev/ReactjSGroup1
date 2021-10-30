export default function Car(props){

  return props.year ? (
     <div className="box">

  <h1>{props.name ? props.name:<span className="warning">"Topilamdi"</span>}</h1>
  <h1>{props.color}</h1>
  <h1>{props.year}</h1>
  <p>{props.children}</p>

     </div>
  ) : (<h1 className="warning">NOT</h1>)

}