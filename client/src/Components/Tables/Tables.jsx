import React from 'react'
import { Button ,Table,Modal,Checkbox,Col, Row } from 'antd'

const Tables = ({data,columns}) => {
  return (
    <div>
       
         <Table dataSource={data} columns={columns}/>;

    
    </div>
  )
}

export default Tables