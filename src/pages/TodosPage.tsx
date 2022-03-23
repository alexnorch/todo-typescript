import React from 'react'
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { useState, useEffect } from 'react';
import { ITodo } from '../interfaces';

export const TodosPage:React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prevState => [...prevState, newTodo])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))

  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Вы уверены что хотите удалить элемент?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  return (
    <>
     <TodoForm onAdd={addHandler}/>
       <TodoList
          onRemove={removeHandler}
          onToggle={toggleHandler} 
          todos={todos}/>
    </>
  )
}
