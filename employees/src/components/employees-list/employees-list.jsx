import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';
//prettier-ignore
const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((el) => {
    const { id, ...itemProps } = el;
    return (
      <EmployeesListItem
        key={id}
        name={itemProps.name}
        salary={itemProps.salary}
        increase={itemProps.increase}
        onDelete={() => onDelete(id)}
      />
    )
  });
  return (
    <ul className='app-list list-group '>
      {elements}
    </ul>
  );
};

export default EmployeesList;
