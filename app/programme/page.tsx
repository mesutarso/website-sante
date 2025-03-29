import ProgrammelGrid from "@/components/programmes/list";

export default function page() {
  return (
    <div>
      <div className="bg-blue w-full min-h-[600px] text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4 uppercase font-rocgrotesk">
            PROGRAMME
          </h1>
        </div>
      </div>

      <ProgrammelGrid />
    </div>
  );
}
