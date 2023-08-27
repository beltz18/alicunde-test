import { useState } from 'react';

const App = () => {
  const [inputText, setInputText]: any = useState('');
  const [items, setItems]: any = useState(['Test Element']);

  const handleInputChange = (event: any) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, inputText]);
    setInputText('');
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>ALICUNDE TEST - REACT</h1>
      <small>Andi Montilla</small>

      <h5>Elementos de la lista:</h5>
      <ul>
        {
          items.map((item: string, index: number) => (
            <li
              key={index}
              onClick={() => handleDeleteItem(index)}
            >
              {item}
            </li>
          ))
        }
      </ul>

      <input
        type="text"
        placeholder='Nombre del nuevo elemento'
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>Agregar</button>
    </div>
  );
};

export default App;