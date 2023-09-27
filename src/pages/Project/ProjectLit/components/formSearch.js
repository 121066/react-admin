import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
function FormSearch() {
    const { Option } = Select;
    return (
        <>
            <div>
                <Form
                    labelCol={{
                        style: { width: 100 },
                    }}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="任务名称">
                                <Input placeholder="任务名称"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="任务状态">
                                <Select placeholder="任务状态">
                                    <Option value="1">未开始</Option>
                                    <Option value="2">执行中</Option>
                                    <Option value="3">已完成</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="是否延期">
                                <Select placeholder="是否延期">
                                    <Option value="1">已延期</Option>
                                    <Option value="2">未延期</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="所属部门">
                                <Select placeholder="所属部门">
                                    <Option value="1">SA</Option>
                                    <Option value="2">EA</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="计划开始时间">
                                <Select placeholder="是否延期">
                                    <Option value="1">已延期</Option>
                                    <Option value="2">未延期</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item wrapperCol={{ offset: 1 }}>
                                <Space>
                                    <Button type="primary">确定</Button>
                                    <Button type="primary">重置</Button>
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
