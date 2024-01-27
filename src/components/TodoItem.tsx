'use client';

import { FC } from "react";

interface ITodoItemPros {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}

const TodoItem: FC<ITodoItemPros> = ({ id, title, complete, toggleTodo }) => {
  return (
    <li className="flex items-center border border-slate-50 p-3 rounded-lg">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 px-2"
      >
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
