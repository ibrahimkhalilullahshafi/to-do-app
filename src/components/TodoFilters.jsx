
import { Button } from '@/components/ui/button';
import { useTodo } from '@/contexts/TodoContext';

const TodoFilters = () => {
  const { filter, setFilter } = useTodo();

  return (
    <div className="flex justify-center mb-6 bg-white p-2 rounded-full shadow-md">
      <div className="inline-flex gap-2 p-1 bg-gray-100 rounded-full">
        <Button
          onClick={() => setFilter('all')}
          variant="ghost"
          className={`rounded-full px-4 ${
            filter === 'all'
              ? 'bg-todo-primary text-white hover:bg-todo-primary/90'
              : 'hover:bg-gray-200 text-gray-700'
          }`}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('active')}
          variant="ghost"
          className={`rounded-full px-4 ${
            filter === 'active'
              ? 'bg-todo-primary text-white hover:bg-todo-primary/90'
              : 'hover:bg-gray-200 text-gray-700'
          }`}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter('completed')}
          variant="ghost"
          className={`rounded-full px-4 ${
            filter === 'completed'
              ? 'bg-todo-primary text-white hover:bg-todo-primary/90'
              : 'hover:bg-gray-200 text-gray-700'
          }`}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default TodoFilters;
