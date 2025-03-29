import ProgrammelGrid from "@/components/programmes/list";

export default function page() {
  return (
    <div>
      <div className="bg-blue w-full min-h-[400px] text-white p-6 flex items-center justify-center">
        <div className="text-center max-w-5xl">
          <h1 className="md:text-3xl text-xl font-bold mb-4 uppercase font-rocgrotesk">
            PROGRAMMES ET INSTITUTIONS DU MINISTÈRE DE LA SANTÉ PUBLIQUE,
            HYGIÈNE ET PRÉVOYANCE SOCIALE EN RÉPUBLIQUE DÉMOCRATIQUE DU CONGO
          </h1>
        </div>
      </div>

      <ProgrammelGrid />
    </div>
  );
}
