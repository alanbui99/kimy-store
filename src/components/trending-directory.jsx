import React from 'react'
import {Row, Col} from 'reactstrap'

import Product from './product'
import {SHOP_DATA} from '../data'

class TrendingDirectory extends React.Component {
    constructor() {
        super()
        this.state = {
            data: SHOP_DATA
        }    
    }

    render() {
        this.state.data.forEach(category => {
            category.items = category.items.filter((item, idx) => idx <2)
        })

        return (
            <section className="py-5">
                <header>
                    <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
                    <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
                </header>
                <Row>
                    {this.state.data.map(category => (
                        category.items.map( item => (
                            <Col sm="6" lg="4" xl="3">
                                <Product key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
                            </Col>
                        ))
                    ))}
                </Row>
            </section>
        )
    }
}

export default TrendingDirectory

