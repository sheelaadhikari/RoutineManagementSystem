import React,{useState} from 'react'
import Header from '../../../Components/Header/Header'
import Home from '../../../Components/Home/Home'
import { Button ,Table,Modal,Radio} from 'antd'
import Typography from 'antd/es/typography/Typography'
import Title from 'antd/es/skeleton/Title'
import Input from 'antd/es/input/Input'
import { TimePicker } from 'antd'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const Bca = () => {
    const dataSource = [
        {
          key: '1',
          semester: 'Mike',
          period: 32,
          teacher: '10 Downing Street',
        },
        {
          key: '2',
          semester: 'John',
          period: 42,
          teacher: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Semester',
          dataIndex: 'semester',
          key: 'semester',
        },
        {
          title: 'Period',
          dataIndex: 'period',
          key: 'period',
        },
        {
          title: 'Teacher',
          dataIndex: 'teacher',
          key: 'teacher',
        },
      ];

      const [isFilterOpen, setIsFilterOpen] = useState(false);
      const showModal = () => {
        setIsFilterOpen(true);
      };
      const handleOk = () => {
        setIsFilterOpen(false);
      };
      const handleCancel = () => {
        setIsFilterOpen(false);
      };

      const [value, setValue] = useState(1);

      const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      };

      const { Title } = Typography;

  return (
    <div className='w-screen'>
        <Header/>
        <div className="">
        <div className="flex justify-between p-8">
            <Button className="btn border-gray-400 font-semibold w-32 ml-24" size='large'>All</Button>
            <Button onClick={showModal} className="btn border-gray-400 font-semibold w-32 mr-24" size='large'>Filter</Button>
      <Modal title="BCA" open={isFilterOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="time flex">
        <Title level={5} className='mr-10'>Time</Title>
       <input type='time' onChange={(event) => console.log(event.target.value)} />
        </div>
       
       <div className="sem flex">
       <Title level={5} className='mr-10'>Sem</Title>
         <Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={onChange}
  >
    <Row>
      <Col span={8}>
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
       <div className="box flex justify-center items-center">
       <div className="table border border-black w-4/5">
         <Table dataSource={dataSource} columns={columns}/>;

        </div>
       </div>
        </div>
       

      
        
    </div>
  )
}

export default Bca