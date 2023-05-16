import { useParams } from "react-router-dom";
import PageTitle from "../../views/PageTitle/PageTitle";
import TableForm from "../../features/RenderTables/TableForm/TableForm";

const TableEdit = () => {

  const {id} = useParams();

  return (
    <>
      <PageTitle>Table {id}</PageTitle>
      <TableForm />
    </>
    
  )
};

export default TableEdit;