const TodoData = (props) => {
  const { todoList, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="todo-item" key={item.id}>
            <div className="font-medium">{item.name}</div>
            <button
              className="bg-cyan-400 border rounded-lg px-2 py-0.5 text-center font-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
