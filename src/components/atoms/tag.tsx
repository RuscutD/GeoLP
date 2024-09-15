type tagType = {
  value: string;
  className?: string;
  sub?: string;
};

export const Tag = ({ value, sub, className }: tagType) => {
  return (
    <div className={`text-center ${className}`}>
      <h5>{value}</h5>
      {sub && <p className="text-center font-light">{sub}</p>}
    </div>
  );
};
