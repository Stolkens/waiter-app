import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getTablesById } from "../../../../redux/tablesReducer";
import { getStatus } from "../../../../redux/statusReducer";
import { getTables } from "../../../../redux/tablesReducer";


const TableForm = () => {

  // const {id} = useParams();
  
  const tablesStatus = useSelector(getStatus);
 
  // const tableData = useSelector((state) => getTablesById(state, id));
  // console.log(tableData)
  
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(status)
  }

  return (
    <Form onChange={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} md="4" className="d-flex align-items-center">
        <Form.Label className="me-4 fw-bold">
          <span>Status:</span></Form.Label>
        <Form.Select aria-label="Table status" onChange={e=>setStatus(e.target.value)}>
          {tablesStatus.map(status => (<option key={status} value={status}>{status}</option>))}
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} md="3" className="d-flex align-items-center">
        <Form.Label className="me-4 fw-bold"><span>People:</span> </Form.Label>
        <Form.Control type="text"/> / <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-2" >
        <Form.Group as={Col} md="2" className="d-flex align-items-center">
        <Form.Label className="fw-bold">Bill:<span className="fw-normal ms-5">$</span></Form.Label>
        <Form.Control type="text"/>
        </Form.Group>
      </Row>
      
      <Button type="submit">Update</Button>
    </Form>
  )
};

export default TableForm;