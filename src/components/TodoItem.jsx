
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTodo } from '@/contexts/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      className="p-4 mb-3 border border-gray-200 shadow-sm hover:shadow transition-all animate-slide-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            className={`h-5 w-5 ${todo.completed ? 'bg-todo-primary' : 'border-2'}`}
          />
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold text-lg transition-all ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </h3>
          
          {todo.description && (
            <p className={`mt-1 text-gray-600 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
              {todo.description}
            </p>
          )}
          
          <div className="mt-2 text-xs text-gray-400">
            {new Date(todo.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
        
        <Button
          onClick={() => deleteTodo(todo.id)}
          variant="ghost"
          size="sm"
          className={`text-gray-400 hover:text-destructive hover:bg-destructive/10 transition-opacity ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TodoItem;
