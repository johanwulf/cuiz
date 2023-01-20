export const Input = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter command"
        className="input w-full max-w-xs mt-2"
      />
      <input
        type="text"
        placeholder="Enter explanation"
        className="input w-full max-w-xs mt-2"
      />
      <input
        type="submit"
        value="Submit"
        className="input w-full max-w-xs mt-2"
      />
    </>
  );
};
