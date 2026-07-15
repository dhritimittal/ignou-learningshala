export default function HeroActions({ openWizard }: { openWizard: () => void }) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">

      <button onClick={openWizard} className="rounded-xl bg-primary hover:bg-primary-hover text-white px-8 py-4 font-semibold">
        Start Free Counselling
      </button>

    </div>
  );
}