import { Button, Form } from "react-bootstrap";
import styles from './TableForm.module.scss';


const TableForm = () => {

  return (
    <>
    <div className="d-flex align-items-center my-4">
    <Form.Label className={styles.label}>Status: </Form.Label>
    <Form.Select aria-label="Table status" className={styles.select}>
      <option value="1">Busy</option>
      <option value="2">Free</option>
      <option value="3">Reserved</option>
      <option value="3">Cleaning</option>
      </Form.Select>
    </div>
    <div className="d-flex align-items-center my-4">
      <Form.Label>People: </Form.Label>
      <Form.Control type="text" className={styles.control}/> / <Form.Control type="text"  className={styles.control} />
    </div>
    <div className="d-flex align-items-center my-4">
      <Form.Label>Bill:   $ </Form.Label>
      <Form.Control type="text"  className={styles.control} />
    </div>
    
    
    <Button type="submit">Update</Button>
    </>
  )
};

export default TableForm;