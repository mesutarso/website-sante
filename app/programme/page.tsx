import { Container, Section } from "lucide-react";
export default function page() {
  const qualificationData = [
    {
      level: "Entry Level",
      qualifications: [
        { name: "Entry Level Award, Certificate, Diploma", abbreviation: "ELA" },
        { name: "Functional Skills", abbreviation: "FS" },
      ],
    },
    {
      level: "Level 1",
      qualifications: [
        { name: "Functional Skills", abbreviation: "FS" },
        { name: "NVQ (Level 1)", abbreviation: "NVQ" },
      ],
    },
    {
      level: "Level 2",
      qualifications: [
        { name: "Award, Certificate, Diploma", abbreviation: "ACD" },
        { name: "GCSE's", abbreviation: "GCSE" },
        { name: "Intermediate Apprenticeship", abbreviation: "IA" },
        { name: "NVQ (Level 2)", abbreviation: "NVQ" },
        { name: "National Certificate/Diploma", abbreviation: "NC, ND" },
        { name: "T Level – Transition Offer", abbreviation: "T Level" },
      ],
    },
    {
      level: "Level 3",
      qualifications: [
        { name: "Advanced Apprenticeship", abbreviation: "AA" },
        { name: "AS Levels", abbreviation: "AS Level" },
        { name: "A Levels", abbreviation: "A Level" },
        { name: "Award, Certificate, Diploma", abbreviation: "ACD" },
      ],
    },
  ]

  return (
    <div>
    <div className="bg-blue w-full min-h-[600px] text-white p-6">
      <div className="flex items-center justify-center content-center h-full">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold  uppercase text-white mb-24">
            PROGRAMME
          </h1>
        </div>
      </div>
    </div>

    <div className="relative min-h-screen bg-white">
      {/* Beige background covering only 30% of the height */}
      <div className="absolute top-0 left-0 right-0 h-[30%] bg-[#f8f0e0] z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-16">
        {/* Background text */}
        <div className="absolute top-0 left-0 pointer-events-none">
          <h1 className="text-8xl md:text-9xl font-bold text-[#e9d5b9] opacity-50">Programme</h1>
        </div>

        {/* Card with table */}
        <div className="relative bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden mt-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-2 md:px-4 text-left text-[#0a2559] font-medium w-1/4">Programme</th>
                  <th className="py-4 px-2 md:px-4 text-left text-[#0a2559] font-medium w-1/2">Detail</th>
                  <th className="py-4 px-2 md:px-4 text-left text-[#0a2559] font-medium w-1/4">Abbreviation</th>
                </tr>
              </thead>
              <tbody>
                {qualificationData.map((levelGroup, groupIndex) =>
                  levelGroup.qualifications.map((qualification, qualIndex) => (
                    <tr key={`${groupIndex}-${qualIndex}`} className="border-b border-gray-200">
                      {qualIndex === 0 ? (
                        <td
                          className="py-4 px-2 md:px-4 align-top text-[#0a2559] font-medium"
                          rowSpan={levelGroup.qualifications.length}
                        >
                          {levelGroup.level}
                        </td>
                      ) : null}
                      <td className="py-4 px-2 md:px-4 text-gray-700">{qualification.name}</td>
                      <td className="py-4 px-2 md:px-4 text-gray-700">{qualification.abbreviation}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

