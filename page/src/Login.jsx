import { Card, Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const cardStyle = {
  width: 500,
  boxShadow: '2px 2px 5px #333333',
  margin: '0 auto',
  marginTop: 200,
  borderRadius: 20
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
};

export default function Login() {
  const history = useHistory();
  
  const onFinish = async (values) => {
    console.log("Success:", values);
    await localStorage.setItem('token', '登录成功')
    history.push("/")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <Card style={cardStyle}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button size="large" shape="round" type="primary" htmlType="submit">
              登 录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
