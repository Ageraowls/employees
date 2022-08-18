import AppInfo from '../app-info/app-info';
import SearchPanel from '../serach-panel/serach-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {
  const data = [
    {
      id: 1,
      name: 'John C.',
      salary: 800,
      increase: false,
    },
    {
      id: 2,
      name: 'Alex W.',
      salary: 3000,
      increase: true,
    },
    {
      id: 3,
      name: 'Peter P.',
      salary: 3300,
      increase: false,
    },
  ];

  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
