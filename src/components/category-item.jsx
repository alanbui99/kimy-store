import React from 'react'
import {CategoryItemLink, CategoryItemImg, CategoryItemTitle} from '../styled-components/category-item'

const CategoryItem = ({title}) => (
    <CategoryItemLink className="mb-4">
        <CategoryItemImg className="img-fluid" src={`/images/${title}.jpg`} alt={title}></CategoryItemImg>
        <CategoryItemTitle className="text-center">{title}</CategoryItemTitle>
    </CategoryItemLink>
)

export default CategoryItem