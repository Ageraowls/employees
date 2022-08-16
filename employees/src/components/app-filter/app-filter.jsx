import './app-filter.css';

const AppFilter = () => {
  // prettier-ignore
  return (
		<div className="btn-group">
			<button
				className='btn btn-light'
				type='button'> 
				Все сотрудники
			</button>
			<button
				className='btn btn-outline-light'
				type='button'> 
				Сотрудники на повышения
			</button>
			<button
				className='btn btn-outline-light'
				type='button'> 
				З/П больше 1000%
				</button>
		</div>
	)
};

export default AppFilter;
