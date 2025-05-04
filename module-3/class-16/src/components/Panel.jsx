export default function Panel({
    title,
    children,
    isActive,
    onShow
  }) {
    return (
      <section className="border-2 border-gray-300 p-4 mb-4 rounded-lg shadow-md bg-white">
        <h3 className="font-bold">{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button className="border bg-blue-200 p-4" onClick={onShow}>
            Show
          </button>
        )}
      </section>
    );
  }
  