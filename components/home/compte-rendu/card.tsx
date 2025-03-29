import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface CompteRenduProps {
  title: string,
  description : string,
  video : any
}

const CompteRenduCard: React.FC<CompteRenduProps> = ({ title, description, video }) => {
  return (
    <div className="bg">
      <Card className="">
          <div className="bg-white rounded-3xl shadow-none overflow-hidden max-w-5xl w-full">
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a2f4b] mb-6 line-clamp-3">
                  {title}
                </h1>
                <p className="text-gray-600 mb-6">
                 {description}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <video
                    src={video}
                    controls
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg?height=360&width=640"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm">Me. Bestine KAZADI</p>
                    <p className="text-white text-xs">
                      Ministre Déléguée en Charge de la Coopération
                      Internationale et Francophonie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Card>
    </div>
  );
}

export default CompteRenduCard;
