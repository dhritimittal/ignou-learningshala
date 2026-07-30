export default function AccentDivider() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-8 h-px bg-primary" />
      <div className="w-4 h-px rounded-full bg-accent" />
    </div>
  );
}