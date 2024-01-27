import Link from "next/link";
import { FC } from "react";
import { prisma } from "@/db";
import TodoItem from "@/components/TodoItem";

const getTodos = async () => await prisma.todo.findMany();

const Home: FC = async () => {
  //await prisma.todo.create({ data: { title: "Bazinga!", complete: false } });
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
          <TodoItem key={todo.id}  {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
