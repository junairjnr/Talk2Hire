export const Name = (prop: any) => {
  const { colored = false } = prop;

  return (
    <span className="text-2xl md:text-4xl font-bold tracking-tight">
      <span className={colored ? "text-indigo-600" : ""}>Talk</span>
      <span className={colored ? "text-gray-400 text-xl md:text-3xl" : "text-xl md:text-3xl"}>
        2
      </span>
      <span className={colored ? "text-indigo-600" : ""}>Hire</span>
    </span>
  );
};
