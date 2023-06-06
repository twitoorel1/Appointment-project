import React from 'react'
import Layouts from '@/layouts/Layouts'
import { Layout } from 'antd'

const profile = () => {
    return (
        <Layouts>
            <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <from className="bg-black w-[60%] h-[100%] flex items-center justify-center">
                    <input type="text" placeholder="Search" />
                </from>
            </Layout>
        </Layouts>
    )
}

export default profile