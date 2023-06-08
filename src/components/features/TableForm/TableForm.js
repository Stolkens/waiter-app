import { Button, Form, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editTables, getTablesById } from "../../../redux/tablesReducer";
import { getStatus } from "../../../redux/statusReducer";
import { useNavigate } from "react-router-dom";



const TableForm = () => {

  const {id} = useParams();

  const tableData = useSelector((state) => getTablesById(state, id));
  console.log('tableData',tableData)

  const tablesStatus = useSelector(getStatus);
  console.log(tablesStatus)

  const dispatch = useDispatch;
  const navigate = useNavigate();
  
  const [status, setStatus] = useState(tableData?.status);
  const [peopleAmount, setPeopleAmount] = useState('');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
  const [bill, setBill] = useState(0);
  

  const handleSubmit = (table) => {
    // e.preventDefault();
    dispatch(editTables({...table, id}));
    navigate("/")
    if (status === "Cleaning" || status === "Free") {
      setPeopleAmount(0);
    }
  }

  const isBillVisible = status === "Busy";

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} className="d-flex align-items-center mt-4">
          <Form.Label className="me-4 fw-bold">
            <span>Status:</span></Form.Label>
          <Form.Select aria-label="Table status" className="mx-4" style={{ width: '30%' }} value={status} onChange={e=>setStatus(e.target.value)}>
            {tablesStatus.map(status => (<option key={status} value={status}>{status}</option>))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}  className="d-flex align-items-center mt-4">
          <Form.Label className="me-5 fw-bold"><span>People:</span> </Form.Label>
          <Form.Control type="text" value={peopleAmount} style={{ width: '4%' }} onChange={e=>setPeopleAmount(e.target.value)}/> 
          <span className="mx-1" >/</span> 
          <Form.Control type="text" value={maxPeopleAmount} style={{ width: '4%' }} onChange={e=>setMaxPeopleAmount(e.target.value)}/>
        </Form.Group>

      {isBillVisible && (
        <Form.Group as={Col} className="d-flex align-items-center mt-4">
          <Form.Label className="fw-bold">Bill: <span className="fw-normal ms-5 me-2">$</span></Form.Label>
          <Form.Control type="text" value={bill}style={{ width: '4%' }} onChange={e=>setBill(e.target.value)}/>
        </Form.Group>
      )}
        

      <Button type="submit" className="mt-4">Update</Button>
    </Form>
  )
};

export default TableForm;