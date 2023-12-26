import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCategories((cat) => [...cat, inputValue]);
    // emitir el evento
    if (inputValue.trim().length === 0) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

// AddCategory.propTypes = {
//   setCategories: PropTypes.func,
// };
