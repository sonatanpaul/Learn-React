export default function BookDetails({ title, author }) {
  return (
    <>
      <div className="mt-4 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500">{author}</p>
      </div>
    </>
  );
}
