import React from 'react'
import CategoryItem from '../category-item/category-item.component'

class CategoryDirectory extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: [
                {
                    title: "women's footwear",
                    id: 1,
                },
                {
                    title: 'jewelry',
                    id: 2,
                },
                {
                    title: 'accessories',
                    id: 3,
                },
                {
                    title: "men's footwear",
                    id: 4,
                },
            ]
        }
    }

    render() {
        const firstCat = this.state.categories[0]
        const secondCat = this.state.categories[1]
        const thirdCat = this.state.categories[2]
        const lastCat = this.state.categories[3]

        return (
            <section className="pt-5">
                <header className="text-center">
                    <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
                    <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
                </header>
                <div className="row">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <CategoryItem key={firstCat.id} title={firstCat.title}/>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <CategoryItem key={secondCat.id} title={secondCat.title}/>
                        <CategoryItem key={thirdCat.id} title={thirdCat.title}/>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <CategoryItem key={lastCat.id} title={lastCat.title}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default CategoryDirectory