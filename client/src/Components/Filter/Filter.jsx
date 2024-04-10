import React,{useState} from 'react'
import { Button ,Table,Modal,Checkbox,Col, Row } from 'antd'
import Typography from 'antd/es/typography/Typography'
import Title from 'antd/es/skeleton/Title'
import Input from 'antd/es/input/Input'
import { TimePicker } from 'antd'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const Filter = ({onFilter}) => {

    const { Title } = Typography;

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedSemesters, setSelectedSemesters] = useState([]);

    const showModal = () => {
      setIsFilterOpen(true);
    };
    const handleOk = () => {
      setIsFilterOpen(false);
      onFilter(selectedSemesters);
    };
    const handleCancel = () => {
      setIsFilterOpen(false);
    };

    const onChange = (checkedValues) => {
      console.log('checked = ', checkedValues);
      setSelectedSemesters(checkedValues);
    };


  return (
    <div>
            <Button onClick={showModal} className="btn border-gray-400 font-semibold w-32 mr-24" size='large'>Filter</Button>
        <Modal title="BCA" open={isFilterOpen} onOk={handleOk} onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: 'blue' } }} >
        <div className="time flex">
        <Title level={5} className='mr-10'>Time</Title>
       <input type='time' onChange={(event) => console.log(event.target.value)} />
        </div>
       
       <div className="sem flex">
       <Title level={5} className='mr-10'>Sem</Title>
         <Checkbox.Group
    onChange={onChange}
    value={selectedSemesters}
  >
    <Row>
      <Col span={8} className='mb-5'>
        <Checkbox value="1">1st</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="2">2nd</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="3">3rd</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="4">4th</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="5">5th</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="6">6th</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
       </div>
        
      </Modal>
    </div>
  )
}

export default Filter