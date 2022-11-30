const Reset = (props) => {
  const handleDraft = (ev) => {
    props.handleReset();
  };
  return (
    <>
      <button
        className="card__button js-reset-btn"
        title="Reset"
        name="Reset"
        type="button"
        onClick={handleDraft}
      >
        <i className="far fa-trash-alt" aria-hidden="true"></i> Reset
      </button>
    </>
  );
};

export default Reset;
