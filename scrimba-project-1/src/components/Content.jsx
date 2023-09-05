import ListForm from "./ListForm";

const Content = () => {
  return (
    <main className="font-mono">
      <h1 className="sr-only">Task CheckList</h1>
      <h2 className="text-3xl text-gray-900 font-bold pb-3">
        Fun facts about React
      </h2>
      <ListForm />
    </main>
  );
};

export default Content;
