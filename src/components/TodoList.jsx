
import { useTodo } from '@/contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { filteredTodos } = useTodo();
  const todos = filteredTodos();

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No tasks found</h3>
        <p className="text-gray-500">
          {filteredTodos().length === 0 ? "Add a new task to get started!" : "No tasks match your current filter."}
        </p>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
