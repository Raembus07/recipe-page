
function Title(props){
    return(
        <div>
            <img src={props.img} alt={props.imgDescription} />
            <h1 className="title">{props.title}</h1>
            <p className="title">{props.text}</p>
        </div>
    );
}

export default Title;