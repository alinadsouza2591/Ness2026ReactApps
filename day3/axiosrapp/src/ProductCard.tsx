
interface deleteProps {
    deleteEvent: (id : number) =>void;
}

export default function ProductCard(props:any)

{

    const deleteButtonHandler = (evt:any)=>
    {
        
        props.deleteEvent(props.cardproduct.id)


    }
    return(
        <div>
            <div className="card">
  <img src={props.cardproduct.url}/>
  <div>
    <h5>{props.cardproduct.name}</h5>
    <p>{props.cardproduct.price}</p>
    <p>{props.cardproduct.description}</p>
  <button onClick={deleteButtonHandler}>Delete</button>
  <button>Modify</button>
  </div>
</div>
        </div>
    )
}