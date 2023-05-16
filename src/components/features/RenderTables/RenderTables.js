import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTables } from "../../../redux/tablesReducer";

const RenderTables = () => {

  const tables = useSelector(getTables);
 
  return (
    <ListGroup>
      {tables.map(table=> 
        (<ListGroup.Item  className="d-flex justify-content-between" 
        key={table.id}>
        <h3 className="fw-bold d-flex align-items-center">{table.name}
        <p className="px-5 my-0 fs-6 fw-bold">Status: <span className="fw-normal">{table.status}</span></p>
        </h3>
        <Link to={"/table/" + table.id}><Button type="button">Show more</Button></Link>
        </ListGroup.Item>))}
    </ListGroup>
  )
};

export default RenderTables;
