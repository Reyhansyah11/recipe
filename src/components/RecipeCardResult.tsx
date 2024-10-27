import { Recipe } from "../types/type";

export default function RecipeCardResult({ recipe }: RecipeCardResultProps) {
  const baseUrl = "https://recipe.sinaukode.my.id/storage";

  return (
    <>
      <div className="card">
        <img
          src={`${baseUrl}/${recipe.thumbnail}`}
          className="w-full h-full object-cover z-10"
          alt="thumbnail"
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg leading-[24px]">{recipe.name}</h3>
            <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4"
                alt="star"
              />
              <span className="font-semibold text-xs leading-[18px] text-white">
                4.8
              </span>
            </div>
          </div>
          <p className="text-sm leading-[21px] text-[#848486]">
            by {recipe.author.name}
          </p>
        </div>
      </div>
    </>
  );
}

interface RecipeCardResultProps {
  recipe: Recipe;
}
