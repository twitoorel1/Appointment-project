import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";
import { Col, Row, Layout } from 'antd'
import { Input } from '@/components/common';
import { Button } from "@/components/common"

const style = {
  background: '#0092ff',
  padding: '8px 0',
};

export default function Home() {
  const cookie = getCookie("ac-token")

  return (
    <>
      {cookie ? (
        <Layouts>
          <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="flex items-center justify-center bg-green-400 w-full md:w-[60vw] h shadow-2xl">
              Here
            </div>
            {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <Col className="gutter-row" span={12}>
                <div style={style}>
                  <Input type='text' placeholder='Text' />
                  <Input type='text' placeholder='Text' />
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div style={style}>
                  <Input type='text' placeholder='Text' />
                  <Input type='text' placeholder='Text' />
                </div>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <Col className="gutter-row" span={24}>
                <Button type="submit" variant="primary">Save</Button>
              </Col>
            </Row> */}
          </Layout>
        </Layouts>
      ) : (
        <Login />
      )}
    </>
  );
}
