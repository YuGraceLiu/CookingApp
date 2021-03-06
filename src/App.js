import * as React from "react";
import './App.css';
import MultipleSelect from './components/MultipleSelect.js';
import MyButton from './components/MyButton.js';

export const App = ({buttonName}) => {
  const ingredients=['Ice', 'Apple', 'Mango', 'Meat', 'Fish', 'Egg', 'Rice'];
  const [cookState, setCookState] = React.useState(buttonName);
  const onCook = () => {
    let newCookState = 'Cook';
    if (cookState === 'Cook') {
      newCookState = 'Come Back';
    }
    setCookState(newCookState);
  };
  const [ingredient, setIngredients] = React.useState([]);
  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    if (value.length < 4) {
      setIngredients(
          typeof value === 'string' ? value.split(',') : value,
      );
    }
    //console.log(value)
    //console.log('+++++++++++++++++++++')
    //if (value.length > 4){
    //  let [Sel1, Sel2, Sel3, Sel4, ...SelOther] = value;
    //  setIngredients(
    //      [Sel1, Sel2, Sel3, Sel4],
    //  );
    //  //console.log(ingredient)
    //}
  };

  return (
    <div className="App">
      <h1>
          Cooking Station
      </h1>
        <div>
          Your Choice
        </div>
        <div>
          <MultipleSelect names={ingredients} handleName={handleSelect} />
        </div>
        <div>
          <MyButton cookState={cookState} handleChange={onCook}/>
        </div>
    </div>
  );
}


