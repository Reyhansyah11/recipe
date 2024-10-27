import { Recipe } from "../types/type";

export default function FeaturedRecipeCard({
  recipe,
}: FeaturedRecipeCardProps) {
  const baseUrl = "https://recipe.sinaukode.my.id/storage";

  return (
    <>
      <div>
        <div className="card">
          <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
              <div className="relative flex flex-col h-full justify-between p-5 z-20">
                <div className="flex flex-col gap-[6px] z-10">
            <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] " />
                  <h3 className="font-bold text-xl leading-[28px] text-white">
                    {recipe.name}
                  </h3>
                  <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
                    {recipe.category.name}
                  </p>
                </div>
                <img
                  src={`${baseUrl}/${recipe.thumbnail}`}
                  className="absolute left-1 top-0 w-full h-full object-cover"
                  alt="thumbnails"
                />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface FeaturedRecipeCardProps {
  recipe: Recipe;
}
