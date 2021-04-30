import React from 'react'
import { Container } from 'reactstrap'

import CategoryDirectory from '../components/category-directory'
import TrendingDirectory from '../components/trending-directory'


const Home = () => (
    <Container className="py-5">
        <CategoryDirectory/>
        <TrendingDirectory/>
    </Container>
)

export default Home