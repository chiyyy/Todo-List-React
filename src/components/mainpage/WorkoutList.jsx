import { useState } from 'react';
import WorkoutItem from './WorkoutItem';
import './WorkoutList.css';

function WorkoutList({ workouts, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const filtered = workouts.filter(item =>
    item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="WorkoutList">
      <h4>오늘의 운동 리스트</h4>
      <input
        className="searchbar"
        placeholder="운동 검색..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="list_wrapper">
        {filtered.map(item => (
          <WorkoutItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutList;
