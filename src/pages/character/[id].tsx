import { CharacterDetailProps } from "@/interfaces/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CharacterDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [detail, setDetail] = useState<CharacterDetailProps>({
    id: 0,
    name: "",
    image: "",
    status: "",
    species: "",
    origin: {
      name: "",
      url: "",
    },
    episode: [],
  });

  useEffect(() => {
    const fetchData: any = async () => {
      try {
        const response: Response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Failed: " + errorData);
        } else {
          const data = await response.json();
          const preData = {
            id: data.id,
            name: data.name,
            image: data.image,
            status: data.status,
            species: data.species,
            origin: data.origin,
            episode: data.episode,
          };
          setDetail(preData);
        }
      } catch (error) {
        console.log("Failed: " + error);
      }
    };

    fetchData();
  });

  //   const fetch;

  return (
    <div>
      <div>
        name: {detail.name}; status: {detail.status} species: {detail.species}
        episode: {detail.episode}
      </div>
      {/* <div>
        {detail.episode.map((epi, idx)=> {
            return <div>
                
            </div>
        })}
      </div> */}
    </div>
  );
};

export default CharacterDetail;
