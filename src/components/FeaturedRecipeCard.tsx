import { Recipe } from "../types/type";

export default function FeaturedRecipeCard({
  recipe,
}: FeaturedRecipeCardProps) {
  const baseUrl = "https://recipe.sinaukode.my.id/storage";

  return (
    <div className="card">
      <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
        <img
          src={`${baseUrl}/${recipe.thumbnail}`}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="thumbnail"
        />
        <div className="gradient-overlay"></div>
        <div className="relative flex flex-col h-full justify-between p-5 z-20">
          <div className="flex items-center w-fit rounded-full py-1 px-2 bg-black backdrop-blur">
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-4 h-4"
              alt="star"
            />
            <span className="font-semibold text-xs leading-[18px] text-white">
              4.5
            </span>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-bold text-xl leading-[28px] text-white">
              {recipe.name}
            </h3>
            <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
              {recipe.category.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeaturedRecipeCardProps {
  recipe: Recipe;
}
