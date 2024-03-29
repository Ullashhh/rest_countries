const Skeleton = () => {
  return (
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-44 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-60"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
  );
};

export default Skeleton;
