


const DifficultyBadge: React.FC<{ difficulty: string }> = ({ difficulty }) => {
  const colors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-orange-100 text-orange-700',
    Advanced: 'bg-red-100 text-red-700'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[difficulty as keyof typeof colors]}`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge
