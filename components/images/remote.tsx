import { generatePlaiceholderFromUrl } from "@/lib/plaiceholder";
import Image from "next/image";

type RemoteImageProps = {
  src: string
  alt: string
  className?: string
}
async function RemoteImage({ src, alt, className, ...props }: RemoteImageProps) {
  const { base64, img } = await generatePlaiceholderFromUrl(src);
  return (
    <div>
      <Image
        src={img.url}
        {...props}
        placeholder="blur"
        blurDataURL={base64}
        alt={alt}
        className={className}
      />
    </div>
  )
}

export default RemoteImage