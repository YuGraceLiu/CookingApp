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
    let newvalue = typeof value === 'string' ? value.split(',') : value;
    if (newvalue.length > 4){
      let [firstSel, secondSel, thirdSel, fourthSel, ...others]  =  newvalue;
      newvalue = [firstSel, secondSel, thirdSel, fourthSel];
    }
    setIngredients(
      newvalue
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Cooking Station
        </div>
        <div>
          Your Choice :
        </div>
        <div>
          <MultipleSelect names={ingredients} handleName={handleSelect}/>
        </div>
        <div>
          <MyButton cookState={cookState} handleChange={onCook}/>
        </div>
      </header>
    </div>
  );
}


