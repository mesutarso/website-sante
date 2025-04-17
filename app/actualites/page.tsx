
import AllArticles from "@/components/articles/all-articles";
interface ArticleProps {
  image: string;
  title: string;
  date: string;
}

export const dynamic = "force-dynamic";

async function Actualites() {



  return (
    <>
      <AllArticles />
    </>


  );
}

export default Actualites;
