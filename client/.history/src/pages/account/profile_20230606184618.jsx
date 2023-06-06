import React from 'react'
import Layouts from '@/layouts/Layouts'
import { Layout } from 'antd'

const profile = () => {
    return (
        <Layouts>
            <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px" }}>
                <div className='bg-black w-[60%] h-[100%]'>
                    <from>
                        <input type="text" placeholder="Search" />
                    </from>
                </div>
            </Layout>
        </Layouts>
    )
}

export default profile