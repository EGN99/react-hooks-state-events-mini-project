import React from "react";

function CategoryFilter({categories, selectedCategory,setSelectedCategory}) {
function handleClick(event){
    event.target.className = "selected";
    setSelectedCategory(event.target.name);
  }

    const buttonsToDisplay = categories.map((category) =>{
    if(category === selectedCategory){
      return (
        <button
          key={category}
          name={category}
          className="selected"
          onClick={handleClick}
        >
          {category}
        </button>
      )
    }
    return (
      <button
        key={category}
        name={category}
        className=""
        onClick={handleClick}
      >
        {category}
      </button>
    )
  }
  );

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsToDisplay}
    </div>
  );
}

export default CategoryFilter;
