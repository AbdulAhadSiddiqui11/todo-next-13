import Link from "next/link";
import { FC } from "react";
import { prisma } from "@/db";
import TodoItem from "@/components/TodoItem";

const getTodos = async () => {
  "use server";
  return await prisma.todo.findMany();
};
const toggleTodo = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
};

const Home: FC = async () => {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href={"/new"}
          className="border border-white px-3 py-2 rounded-md cursor-pointer hover:bg-indigo-950 focus-within:bg-indigo-950 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
