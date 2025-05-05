
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useTodo } from '@/contexts/TodoContext';

const TodoHeader = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
    setIsExpanded(false);
  };

  return (
    <Card className="p-6 mb-6 bg-white shadow-md rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="border-2 border-gray-200 focus:border-todo-primary p-3 text-lg"
          />
          
          {isExpanded && (
            <div className="animate-fade-in">
              <Textarea
                placeholder="Add description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 min-h-[80px] border-2 border-gray-200 focus:border-todo-primary p-3"
              />
            </div>
          )}
          
          <div className={`flex justify-end ${isExpanded ? 'animate-fade-in' : 'hidden'}`}>
            <Button
              type="button"
              onClick={() => setIsExpanded(false)}
              variant="outline"
              className="mr-2"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!title.trim()}
              className="bg-todo-primary hover:bg-todo-primary/90"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default TodoHeader;
