

function PrepTime(props) {
    return (
        <div className="preptime">
            <h3>Preperation Time</h3>
            <ul>
                <li><b>Total:</b> {props.total}</li>
                <li className="listItem"><b>Preparation:</b> {props.preparation}</li>
                <li className="listItem"><b>Cooking:</b> {props.cooking}</li>
            </ul>
        </div>
    );
}

export default PrepTime;