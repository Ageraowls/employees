import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';
//prettier-ignore
const EmployeesList = ({ data }) => {
  const elements = data.map((el, i) => {
    return (
      <EmployeesListItem
        id={1 + i}
        name={el.name}
        salary={el.salary}
        increase={el.increase}
      />
    )
  });

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  );
};

export default EmployeesList;
