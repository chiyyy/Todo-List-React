import { useState, useRef } from 'react';
import './WorkoutEditor.css';

function WorkoutEditor({ onCreate }) {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const handleSubmit = () => {
    if (!content.trim()) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="WorkoutEditor">
      <h4>새 운동 루틴 추가 ✏</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={e => setContent(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          placeholder="예: 런지 20회"
        />
        <button onClick={handleSubmit}>추가</button>
      </div>
    </div>
  );
}

export default WorkoutEditor;
