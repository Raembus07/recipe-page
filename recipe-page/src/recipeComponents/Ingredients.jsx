

function Ingredients({ ingredients }) {
    return (
        <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li className="listItem" key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default Ingredients;