import './RecordBox.css';

const RecordBox = ({ date, workouts }) => {
  return (
    <div className="record-box">
      <h3>{date}의 운동</h3>
      {workouts.length > 0 ? (
        <ul>
          {workouts.map((w, i) => (
            <li key={i}>✅ {w}</li>
          ))}
        </ul>
      ) : (
        <p>운동 기록이 없습니다.</p>
      )}
    </div>
  );
};

export default RecordBox;
