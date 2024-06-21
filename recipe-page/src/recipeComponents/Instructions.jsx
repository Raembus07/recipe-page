// src/recipeComponents/Instructions.js

function Instructions({ instructions }) {
    return (
        <div className="instructions">
            <h2>Instructions</h2>
            <ol>
                {instructions.map((instruction, index) => (
                    <li className="listItem" key={index}>
                        <strong>{instruction.title}</strong> {instruction.text}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Instructions;
