// src/recipeComponents/Nutrition.js

function Nutrition(props) {
    return (
        <div className="nutrition">
            <h2>Nutrition</h2>
            <p>The table below shows nutrition values per serving without the additional fillings.</p>
            <table className="table">
                <tbody>
                    <tr className="tableElement">
                        <th className="tableElementHead">Calories</th>
                        <td className="tableElementData">{props.nutrition[0]}</td>
                    </tr>
                    <tr className="tableElement">
                        <th className="tableElementHead">Carbs</th>
                        <td className="tableElementData">{props.nutrition[1]}</td>
                    </tr>
                    <tr className="tableElement">
                        <th className="tableElementHead">Protein</th>
                        <td className="tableElementData">{props.nutrition[2]}</td>
                    </tr>
                    <tr>
                        <th className="tableElementHead">Fat</th>
                        <td className="tableElementData">{props.nutrition[3]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Nutrition;
