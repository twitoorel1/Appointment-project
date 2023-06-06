import React from 'react'
import Layouts from '@/layouts/Layouts'
import { Col, Row, Layout } from 'antd'

const style = {
    background: '#0092ff',
    padding: '8px 0',
};

const profile = () => {
    return (
        <Layouts>
            <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ display: "flex" }}>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <input type='text' placeholder='Text' />
                            <input type='text' placeholder='Text' />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <input type='text' placeholder='Text' />
                            <input type='text' placeholder='Text' />
                        </div>
                    </Col>
                </Row>

            </Layout>
        </Layouts>
    )
}

export default profile