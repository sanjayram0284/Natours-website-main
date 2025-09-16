function Loader() {
  return (
    <div className="fixed inset-0 glassy flex items-center gap-4 justify-center z-50">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}

export default Loader;
