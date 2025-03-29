import { getPlaiceholder } from "plaiceholder";

export async function generatePlaiceholderFromUrl(url: string) {
  const buffer = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { url, height, width },
  };
}
