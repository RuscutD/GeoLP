type tagType = {
  value: string;
  className?: string;
};

export const Tag = ({ value, className }: tagType) => {
  return <h5 className={className}>{value}</h5>;
};
