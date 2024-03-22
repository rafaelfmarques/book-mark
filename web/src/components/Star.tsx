import { StarProps } from "@/interfaces/Star.interface";

export default function Star({ active, size = 25 }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "text-yellow-500" : "text-gray-300"}
      width={size}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 14.472l-4.229 2.372.81-4.743-3.419-3.333 4.748-.691L10 3.102l2.09 4.915 4.748.691-3.419 3.333.81 4.743z"
        clipRule="evenodd"
      />
    </svg>
  );
}
