import React, { useEffect } from 'react';
import { createDepartment, readSingleDepartment } from "../../store/slice/DepartmentSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';

const Department = () => {
    const dispatch = useDispatch();
    const {department, loading } = useSelector((state) => state.departmentapp);
const {alldepartment,singledepartment}=department;

    const { departmentname } = useParams();

    useEffect(() => {
        dispatch(readSingleDepartment(departmentname));
        console.log('singledepartment',singledepartment);
    }, [departmentname]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            Department
            <br/>
            {singledepartment && (
                <>
                    <p>Name: {singledepartment.singledepartment.name}</p>
                    <p>Created At: {singledepartment.singledepartment.createdAt}</p>
                    <p>Updated At: {singledepartment.singledepartment.updatedAt}</p>
                </>
            )}
             <Button type="primary" style={{ backgroundColor: 'blue'}}>Add</Button>
             <Button type="primary" style={{ backgroundColor: 'blue'}}>Delete</Button>

        </div>
    );
};

export default Department;
