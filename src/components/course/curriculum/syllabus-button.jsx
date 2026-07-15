import { Download } from "lucide-react";

export default function SyllabusButton({ openWizard }) {
  return (
    <button
      onClick={openWizard}
      className="
        border-accent
        bg-accent
        text-foreground
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