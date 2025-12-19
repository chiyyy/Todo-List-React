// src/pages/MainPage.jsx
import { useState, useRef, useEffect } from 'react';
import WorkoutEditor from '../components/mainpage/WorkoutEditor';
import WorkoutList from '../components/mainpage/WorkoutList';
import { getLocalDateStr } from '../utils/date';

const defaultWorkouts = [
  {
    id: 0,
    content: '스쿼트 30회',
    isDone: false,
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    content: '팔굽혀펴기 20회',
    isDone: false,
    createdDate: new Date().getTime(),
  },
];

function MainPage() {
  const [workouts, setWorkouts] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('workoutList'));
      return Array.isArray(saved) && saved.length > 0 ? saved : defaultWorkouts;
    } catch (e) {
      return defaultWorkouts;
    }
  });

  const idRef = useRef(0);

  useEffect(() => {
    if (workouts.length > 0) {
      idRef.current = Math.max(...workouts.map(w => w.id)) + 1;
    }
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('workoutList', JSON.stringify(workouts));

    const existingRecords = JSON.parse(localStorage.getItem('workoutRecords')) || {};

    workouts.forEach((item) => {
      if (item.checkedDate) {
        const dateStr = getLocalDateStr(item.checkedDate);
        if (!existingRecords[dateStr]) existingRecords[dateStr] = [];

        if (!existingRecords[dateStr].includes(item.content)) {
          existingRecords[dateStr].push(item.content);
        }
      }
    });

    localStorage.setItem('workoutRecords', JSON.stringify(existingRecords));
  }, [workouts]);

  const onCreate = (content) => {
    const newWorkout = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setWorkouts([newWorkout, ...workouts]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setWorkouts(
      workouts.map(it =>
        it.id === targetId
          ? {
              ...it,
              isDone: !it.isDone,
              checkedDate: !it.isDone ? new Date().getTime() : it.checkedDate ?? null
            }
          : it
      )
    );
  };

  const onDelete = (targetId) => {
    setWorkouts(workouts.filter(it => it.id !== targetId));
  };

  return (
    <div className="MainPage">
      <WorkoutEditor onCreate={onCreate} />
      <WorkoutList
        workouts={workouts}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default MainPage;
