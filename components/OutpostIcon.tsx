export default function OutpostIcon({
  size = 18,
  fill = "currentColor",
}: {
  size?: number;
  fill?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 28V14C6 8.477 10.477 4 16 4s10 4.477 10 10v14H6ZM12 28V17c0-2.21 1.79-4 4-4s4 1.79 4 4v11H12Z"
        fill={fill}
      />
    </svg>
  );
}
