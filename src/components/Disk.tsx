interface DiskProps {
  size: number;
}

const diskColors: string[] = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-500",
];

export const Disk = ({ size }: DiskProps) => {
  const width = `${(size + 1) * 12 + 20}px`;

  return (
    <div
      className={`h-4 rounded-3xl ${diskColors[size - 1]} mx-auto`}
      style={{ width }}
    ></div>
  );
};
