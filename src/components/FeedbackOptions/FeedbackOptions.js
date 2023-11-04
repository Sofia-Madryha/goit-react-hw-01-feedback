export const FeedbackOptions = ({ onChangeState }) => {
  return (
    <div>
      <button onClick={evt => onChangeState('good', evt.target.value)}>
        Good
      </button>
      <button onClick={evt => onChangeState('neutral', evt.target.value)}>
        Neutral
      </button>
      <button onClick={evt => onChangeState('bad', evt.target.value)}>
        Bad
      </button>
    </div>
  );
};
