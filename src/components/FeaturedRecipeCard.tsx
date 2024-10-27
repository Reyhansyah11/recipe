import { Recipe } from "../types/type";

export default function FeaturedRecipeCard({
  recipe,
}: FeaturedRecipeCardProps) {
  const baseUrl = "https://recipe.sinaukode.my.id/storage";

  return (
    <>
      <div>
        <div className="card">
          <img
            src={`${baseUrl}/${recipe.thumbnail}`}
            className="absolute w-full h-full object-cover"
            alt="thumbnails"
          />
        </div>
      </div>
    </>
  );
}

interface FeaturedRecipeCardProps {
  recipe: Recipe;
}
