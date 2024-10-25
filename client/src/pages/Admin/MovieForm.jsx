import { Modal, Form, Input, InputNumber, DatePicker, Row, Col, Button, Select } from 'antd';
const { Option } = Select;
import {addMovies} from "../../api/movies"

import PropTypes from 'prop-types';

function MovieForm({ isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    console.log('Success:', values);
    const response = await addMovies(values);
    console.log(response);
    if(response.success)
    {
      location.reload();
    }
  };
  

 

  return (
    <>
      <div>
      <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width="80%"   // Adjusts modal width on larger screens
      style={{ maxWidth: '800px', margin: 'auto' }} // Centers modal
    >
             <h1>Create Movies</h1>
      <Form
        name="horizontal_login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
         <Form.Item
              label="Enter movie Title"
              name="title"
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
          label="Description of movie"
          name="descripton"
          rules={[{ required: true, message: 'Please input description' }]}
        >
          <Input.TextArea showCount maxLength={100} placeholder="Description" />
        </Form.Item>
      
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={8}>
              <Form.Item
                label="Select movie genre"
                name="genre"
                rules={[{ required: true, message: 'Please select a genre!' }]}
              >
                <Select placeholder="Select Genre">
                  <Option value="action">Action</Option>
                  <Option value="comedy">Comedy</Option>
                  <Option value="drama">Drama</Option>
                  <Option value="horror">Horror</Option>
                  <Option value="romance">Romance</Option>
                  <Option value="sci-fi">Sci-Fi</Option>
                  <Option value="thriller">Thriller</Option>
                  {/* Add more genres as needed */}
                </Select>
              </Form.Item>
          </Col>
          <Col xs={12} sm={8}>
              <Form.Item
                label="Select language"
                name="language"
                rules={[{ required: true, message: 'Please select a language!' }]}
              >
                <Select placeholder="Select Language">
                  <Option value="english">English</Option>
                  <Option value="telgu">Telgu</Option>
                  <Option value="hindi">Hindi</Option>
                </Select>
              </Form.Item>
          </Col>
          <Col xs={12} sm={8}>
            <Form.Item
              label="Give movie duration in (second)"
              name="duration"
              rules={[{ required: true, message: 'Please input your duration!' }]}
            >
              <InputNumber placeholder="Duration" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Enter release date"
              name="releasedate"
              rules={[{ required: true, message: 'Please input your releasedate!' }]}
            >
              <DatePicker placeholder="Releasedate" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Enter poster url"
              name="poster"
              rules={[{ required: true, message: 'Please input your poster!' }]}
            >
              <Input placeholder="Poster" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit" style={{width:"100%"}}>
            Submit
          </Button>
          </Form.Item>
      </Form>
    </Modal>
      </div>
    </>
  );
}

MovieForm.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};


export default MovieForm;
