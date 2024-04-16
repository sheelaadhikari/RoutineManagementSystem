import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Tables from '../../Components/Tables/Tables';
import { Button, Input, Space, Modal, Typography } from 'antd';
const { Title } = Typography;
const { Search } = Input;
import { createDepartment, deleteDepartment, readDepartment, updateDepartment } from '../../store/slice/DepartmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { all } from 'axios';


const ManageDepartment = () => {
    const dispatch = useDispatch();
    const { department } = useSelector(state => state.departmentapp);
    const { listdepartment } = department;
    const { alldepartments } = listdepartment;

    const [open, setOpen] = useState(false);
    const [deptname, setDeptName] = useState({'name':''});

    useEffect(() => {
        dispatch(readDepartment());
        console.log('manage',listdepartment);
    }, [dispatch]);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (data) => {
        // console.log(deptname);
        dispatch(createDepartment(deptname));
        setOpen(false);
    };

    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleDelete = (departmentId) => {
        dispatch(deleteDepartment(departmentId));
    //    console.log(departmentId);
    };

    //update modal 
    const [editopen, setEditOpen] = useState(false);
    const [editdeptname, setEditDeptName] = useState({'_id':'','name':''});

    const showEditModal = (departmentId, departmentName) => {
        setEditDeptName({ _id: departmentId, name: departmentName });
        setEditOpen(true);
    };
    const handleEditOk = (data) => {
        console.log(editdeptname);
        dispatch(updateDepartment(editdeptname));
        setEditOpen(false);
    };
    const handleEditCancel = () => {
        // console.log('Clicked cancel button');
        setEditOpen(false);
    };

    const columns = [
        {
            title: 'S.N',
            dataIndex: 'sn',
            key: 'sn',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Button className='bg-blue-600 text-white'onClick={() => showEditModal(record.key, record.name)}>Edit</Button>
                    <Button type="danger" onClick={() => handleDelete(record.key)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className='w-screen'>
            <Header />
            <div className="">
                <div className="flex justify-between p-8">
                    <Search placeholder="Search text" allowClear onSearch={onSearch} style={{ width: 200 }} size="large" />
                    <Button className="btn border-gray-400 font-semibold w-32 ml-24" size='large' onClick={showModal}>
                        Add
                    </Button>
                    <Modal
                        open={open}
                        onOk={handleOk}
                        okButtonProps={{ style: { backgroundColor: 'blue' } }}
                        onCancel={handleCancel}
                    >
                        <Title level={4}>Add New Department</Title>
                        <label className=''>Department name</label>
                        <input type='text' name='name' value={deptname.name} onChange={(e) => { setDeptName({...deptname,name:e.target.value}) }} placeholder='Name' className="p-1 border border-blue-700 w-full outline-none" />
                    </Modal>
                </div>

                <div className="box flex justify-center items-center">
                    <div className="table border border-black w-4/5">
                        <Tables data={listdepartment.alldepartments.map((item, index) => ({
                        key: item._id,
                        name: item.name,
                        sn: index + 1,
                        }))}
                            columns={columns} />
                    </div>


                    <Modal
                        open={editopen}
                        onOk={handleEditOk}
                        okButtonProps={{ style: { backgroundColor: 'blue' } }}
                        onCancel={handleEditCancel}
                    >
                        <Title level={4}>Edit New Department</Title>
                        <label className=''>Department name</label>
                        <input type='text' name='name' value={editdeptname.name} onChange={(e) => { setEditDeptName({...editdeptname,name:e.target.value}) }} placeholder='Name' className="p-1 border border-blue-700 w-full outline-none" />
                    </Modal>

                    
                </div>
            </div>
        </div>
    )
}

export default ManageDepartment