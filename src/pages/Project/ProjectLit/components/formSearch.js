import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';
function FormSearch() {
    const { Option } = Select;
    const [form] = Form.useForm();
    //重置
    const onReset = () => {
        form.resetFields();
    };
    const onFinish = (e) => {
        console.log(e, '数据');
    };
    return (
        <>
            <div>
                <Form
                    form={form}
                    labelCol={{
                        style: { width: 100 },
                    }}
                    onFinish={onFinish}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="任务名称" name="taskName">
                                <Input placeholder="任务名称"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="任务状态" name="status">
                                <Select placeholder="任务状态">
                                    <Option value="1">未开始</Option>
                                    <Option value="2">执行中</Option>
                                    <Option value="3">已完成</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="是否延期" name="delay">
                                <Select placeholder="是否延期">
                                    <Option value="1">已延期</Option>
                                    <Option value="2">未延期</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="所属部门" name="company">
                                <Select placeholder="所属部门">
                                    <Option value="1">SA</Option>
                                    <Option value="2">EA</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="计划开始时间" name="date">
                                <DatePicker
                                    style={{ width: '100%' }}
                                    placeholder="选择计划开始时间"
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item wrapperCol={{ offset: 1 }}>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        确定
                                    </Button>
                                    <Button
                                        type="primary"
                                        htmlType="button"
                                        onClick={onReset}
                                    >
                                        重置
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}
export default FormSearch;
