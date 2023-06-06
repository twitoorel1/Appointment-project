import React from 'react'
import Layouts from '@/layouts/Layouts'
import { Layout } from 'antd'

const profile = () => {
    return (
        <Layouts>
            <Layout style={{ minHeight: "100vh", backgroundColor: "blue", borderRadius: "20px" }}>
                <h1>Profile</h1>
            </Layout>
        </Layouts>
    )
}

export default profile