import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import '../index.scss'
function AddTask(props) {
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleOk = () => {
        form.submit()
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const handleOpen = useCallback(() => {
        setIsModalOpen(true)
        form.resetFields()
    })
    const [addForm, setAddForm] = useState({})
    const getSetForm = (e) => {
        // setAddForm(e)
    }

    const { Option } = Select
    // const { onReset } = props
    const onFinish = (values) => {
        setAddForm(values)
        props.onAdd(values)
        console.log(addForm, '>><<')
    }
    return (
        <>
            <Button onClick={handleOpen} className="m8" type="primary">
                新建任务
            </Button>
            <Modal
                centered
                width={800}
                title="新增任务"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确认"
                cancelText="取消"
            >
                <Form form={form} onFinish={onFinish}>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="任务名称" name="taskName">
                                <Input placeholder="任务名称"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="父任务" name="parentTask">
                                <Input placeholder="父任务"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="任务状态" name="status">
                                <Select placeholder="任务状态">
                                    <Option value="1">未开始</Option>
                                    <Option value="2">执行中</Option>
                                    <Option value="3">已完成</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="所属部门" name="company">
                                <Input placeholder="请输入所属部门"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="任务描述" name="taskDice">
                                <Input.TextArea></Input.TextArea>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
function InfoForm(props) {
    const [form] = Form.useForm()
    useEffect(() => {
        form.resetFields()
    })

    const { Option } = Select
    // const { onReset } = props
    const onFinish = (e) => {
        console.log(e, 'e数据')
        // props.getValue(form)
    }

    return (
        <>
            <Form form={form} onFinish={onFinish}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="任务名称" name="taskName">
                            <Input placeholder="任务名称"></Input>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="父任务" name="parentTask">
                            <Input placeholder="父任务"></Input>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="任务状态" name="status">
                            <Select placeholder="任务状态">
                                <Option value="1">未开始</Option>
                                <Option value="2">执行中</Option>
                                <Option value="3">已完成</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="所属部门" name="company">
                            <Input placeholder="请输入所属部门"></Input>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="任务描述" name="taskDice">
                            <Input.TextArea></Input.TextArea>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default AddTask
