export default function Badge({ children, variant = "blue" }) {
  const variants = {
    blue: "bg-[#D6EAF3] text-[#094f72]",
    amber: "bg-amber-100 text-amber-800",
    green: "bg-emerald-100 text-emerald-800",
    navy: "bg-[#0F1F3D] text-white",
  };
  return (
    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}