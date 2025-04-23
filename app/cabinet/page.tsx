
import { Container, Section } from "@/components/craft";

import Image from "next/image";

interface ProfileCardProps {
  imageSrc?: string;
  name: string;
  title: string;
  borderColor?: string;
  backgroundColor?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  title,
  borderColor,
  backgroundColor,
}) => {
  return (
    <div
      className={`overflow-hidden  ${borderColor || "border-gray-200"
        } shadow-none`}
    >
      <div
        className={`aspect-[4/3] rounded-xl relative ${backgroundColor || "bg-gray-100"
          }`}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        )}
      </div>
      <div className="p-4 text-center">
        <h2 className="text-3xl font-extrabold text-blue">{name}</h2>
        <p className="text-blue text-lg font-light">{title}</p>
      </div>
    </div>
  );
};

function Cabinet() {
  return (
    <div className="bg-[#f6f8fc]">
      <Section>
        <Container>
          <h1 className="md:text-5xl text-3xl font-black text-center uppercase text-blue mb-24">
            Membres du Cabinet <br /> Ministère de la Santé Publique, <br /> Hygiène et prévoyance sociale
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 ">
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

const profiles = [
  {
    imageSrc: "/images/members/directeur.jpg",
    name: "MUBOYAYI Romain",
    title: "Directeur du Cabinet",
    borderColor: "border-blue-300",
  },
  {
    name: " ",
    title: "Directeur du Cabinet Adjoint",
    backgroundColor: "bg-[#1a2f4b]",
  },
  {
    name: "",
    title: "Conseiller",
    backgroundColor: "bg-[#1a2f4b]",
  },
  {
    name: " ",
    title: "Conseiller",
    backgroundColor: "bg-[#1a2f4b]",
  },
  {
    name: " ",
    title: "Conseiller",
    backgroundColor: "bg-[#1a2f4b]",
  },
];

export default Cabinet;
