import React from 'react'
import EditorsPick from '../components/EditorsPick'
import BestSeller from '../components/BestSeller'
import Card from '../components/Card'
import FeaturedPost from '../components/FeaturedPost'
import Slider from '../layout/Slider'

export default function HomePage() {
    return (
        <div >
            <Slider />
            <EditorsPick />
            <BestSeller />
            <Slider />
            <Card />
            <FeaturedPost />
        </div>
    )
}