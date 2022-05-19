import React,{useState} from 'react'
import Layout from '../components/layout/layout'

const NotFound:React.FC = () => {

    return (
        <Layout title=''>
            <h1>404</h1>
            <h3>お探しのページは見つかりませんでした</h3>
        </Layout>
    )
}

export default NotFound;