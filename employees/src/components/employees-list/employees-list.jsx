import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';
//prettier-ignore
const EmployeesList = ({ data }) => {
  const elements = data.map((el) => {
    const { id, ...itemProps } = el;
    return (
      <EmployeesListItem
        key={id}
        name={itemProps.name}
        salary={itemProps.salary}
        increase={itemProps.increase}
      />
    )
  });
  console.log(elements)
  return (
    <ul className='app-list list-group '>
      {elements}
    </ul>
  );
};

export default EmployeesList;
