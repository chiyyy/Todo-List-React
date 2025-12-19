import './WorkoutItem.css';

function WorkoutItem({ id, content, isDone, createdDate, onUpdate, onDelete }) {
  return (
    <div className="WorkoutItem">
      <div className="checkbox_col">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onUpdate(id)}
        />
      </div>
      <div className={`title_col ${isDone ? 'done' : ''}`}>{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
}

export default WorkoutItem;
