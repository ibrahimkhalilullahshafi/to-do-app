
import TodoHeader from './TodoHeader';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import { TodoProvider } from '@/contexts/TodoContext';
import { Card } from '@/components/ui/card';

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-todo-background py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-todo-primary mb-2">TaskMaster</h1>
            <p className="text-gray-600">Stay organized, get things done.</p>
          </div>

          <TodoHeader />
          <TodoFilters />
          
          <Card className="p-6 bg-white rounded-xl shadow-md">
            <TodoList />
          </Card>
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
