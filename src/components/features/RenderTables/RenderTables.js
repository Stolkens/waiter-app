import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const RenderTables = () => {

  const tables = useSelector(state => state.tables);
  console.log(tables)


  return (
    <ListGroup>
      <ListGroup.Item>
        <Button type="button">Show more</Button>
      </ListGroup.Item>
    </ListGroup>
  )
};

export default RenderTables;