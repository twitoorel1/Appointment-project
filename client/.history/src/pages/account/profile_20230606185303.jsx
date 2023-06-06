import React from 'react'
import Layouts from '@/layouts/Layouts'
import { Col, Row, Layout } from 'antd'


const profile = () => {
    return (
        <Layouts>
            <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>

            </Layout>
        </Layouts>
    )
}

export default profile