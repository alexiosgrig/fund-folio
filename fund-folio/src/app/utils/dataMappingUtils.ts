import { IRecommendationsResponse } from '../services/IRecommendations';

interface MapDataCategories {
  key: string;
  label: string;
  stack: string;
}
export const handleDataMapping = (mapData, categories: MapDataCategories[]) => {
  if (!mapData) return undefined;

  const dataMapping = categories.map((category) => ({
    data: mapData.map(
      (data) => data[category.key as keyof IRecommendationsResponse] || 0
    ),
    stack: category.stack,
    label: category.label,
  }));

  return dataMapping;
};
