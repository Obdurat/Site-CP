type HistoryCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function HistoryCard({ title, description, icon }: HistoryCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="self-start">{icon}</div>
      <div>
        <h2 className="text-lg font-bold text-cpblue-300">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
