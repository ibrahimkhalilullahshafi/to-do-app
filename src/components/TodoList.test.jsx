
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TodoList from './TodoList';
import { TodoContext } from '../contexts/TodoContext';

describe('TodoList Component', () => {
  it('displays empty state when there are no todos', () => {
    const mockFilteredTodos = vi.fn().mockReturnValue([]);

    render(
      <TodoContext.Provider value={{ filteredTodos: mockFilteredTodos }}>
        <TodoList />
      </TodoContext.Provider>
    );

    expect(screen.getByText('No tasks found')).toBeInTheDocument();
    expect(screen.getByText('Add a new task to get started!')).toBeInTheDocument();
  });

  it('displays todos when they exist', () => {
    const todos = [
      {
        id: '1',
        title: 'Test Todo 1',
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Test Todo 2',
        completed: true,
        createdAt: new Date().toISOString(),
      }
    ];

    const mockFilteredTodos = vi.fn().mockReturnValue(todos);

    render(
      <TodoContext.Provider value={{ filteredTodos: mockFilteredTodos }}>
        <TodoList />
      </TodoContext.Provider>
    );

    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });
});

