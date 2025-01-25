import React from 'react';

function CategoryTabs({ categories, onSelectCategory }) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="category-tab"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
