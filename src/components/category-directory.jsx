import React from 'react'

import {Row, Col} from 'reactstrap'

import CategoryItem from './category-item'
import {CATEGORIES} from '../data'

class CategoryDirectory extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: CATEGORIES
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
                <Row>
                    <Col md="4">
                        <CategoryItem key={firstCat.id} title={firstCat.title}/>
                    </Col>
                    <Col md="4">
                        <CategoryItem key={secondCat.id} title={secondCat.title}/>
                        <CategoryItem key={thirdCat.id} title={thirdCat.title}/>
                    </Col>
                    <Col md="4">
                        <CategoryItem key={lastCat.id} title={lastCat.title}/>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default CategoryDirectory