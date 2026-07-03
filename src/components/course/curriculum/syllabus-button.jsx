import { Download } from "lucide-react";

export default function SyllabusButton() {
  return (
    <button
      className="
        border-[#F6C94A]
        bg-[#F6C94A]
        text-[#061122]
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        px-5
        py-3
        text-sm
        font-semibold
      "
    >
      <Download size={18} />
      Download Syllabus
    </button>
  );
}