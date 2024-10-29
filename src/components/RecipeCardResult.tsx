import { Recipe } from "../types/type";

export default function RecipeCardResult({ recipe }: RecipeCardResultProps) {
  const baseUrl = "https://recipe.sinaukode.my.id/storage";

  return (
    <>
      <div className="card">
        <img
          src={`${baseUrl}/${recipe.thumbnail}`}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>
    </>
  );
}

interface RecipeCardResultProps {
  recipe: Recipe;
}
