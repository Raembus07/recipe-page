
function Card(props){
    return(
        <div>
            <img src={props.img} alt={props.imgDescription}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;