import React,{useState} from 'react'
import Layout from '../components/layout/layout'
import SlideShow from "../components/slideshow/slideshow";
import TwitterComp from '../components/twitterComp/twitterComp'

const Home:React.FC = () => {

    return (
        <Layout title=''>
            <SlideShow />
            <TwitterComp />
        </Layout>
    )
}

export default Home;