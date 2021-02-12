import React from 'react'

const CategoryItem = ({title}) => (
    <a className="category-item mb-5" href="shop.html">
        <img className="img-fluid" src={`/images/${title}.jpg`} alt={title}></img>
        <strong className="category-item-title text-center">{title}</strong>
    </a>
)

export default CategoryItem