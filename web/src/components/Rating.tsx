import { RatingProps } from "@/interfaces/Rating.interface";
import Star from "./Star";

export default function Rating({ amount }: RatingProps) {
  const fullStars = Math.floor(amount);
  const hasHalfStar = amount % 1 !== 0;

  const renderStars = (count: number, hasHalf: boolean) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star key={i} active />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <div className="flex gap-1">{renderStars(fullStars, hasHalfStar)}</div>
  );
}
