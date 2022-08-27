import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';
//prettier-ignore
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((el) => {
    const { id, ...itemProps } = el;
    return (
      <EmployeesListItem
        key={id}
        name={itemProps.name}
        salary={itemProps.salary}
        increase={itemProps.increase}
        rise={itemProps.rise}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) }
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
