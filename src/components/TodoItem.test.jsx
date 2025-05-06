import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TodoItem from './TodoItem';
import { TodoProvider } from '../contexts/TodoContext';

// Mock the Todo context
const mockToggleTodo = vi.fn();
const mockDeleteTodo = vi.fn();

// Create a wrapper component that provides the mocked context
const renderWithContext = (ui, mockValues = {}) => {
  return render(
    <TodoProvider value={{
      toggleTodo: mockValues.toggleTodo || mockToggleTodo,
      deleteTodo: mockValues.deleteTodo || mockDeleteTodo,
    }}>
      {ui}
    </TodoProvider>
  );
};

describe('TodoItem Component', () => {
  it('renders todo item correctly', () => {
    const todo = {
      id: '1',
      title: 'Test Todo',
      description: 'Test description',
      completed: false,
      createdAt: new Date().toISOString(),
    };

    render(
      <TodoProvider>
        <TodoItem todo={todo} />
      </TodoProvider>
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('shows completed styling when todo is completed', () => {
    const todo = {
      id: '1',
      title: 'Completed Todo',
      completed: true,
      createdAt: new Date().toISOString(),
    };

    render(
      <TodoProvider>
        <TodoItem todo={todo} />
      </TodoProvider>
    );

    expect(screen.getByText('Completed Todo')).toHaveClass('line-through');
  });
});