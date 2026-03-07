export default function OutpostIcon({
  size = 18,
  fill = "currentColor",
}: {
  size?: number;
  fill?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24V10C0 4.477 4.477 0 10 0s10 4.477 10 10v14H0ZM6 24V13c0-2.21 1.79-4 4-4s4 1.79 4 4v11H6Z"
        fill={fill}
      />
    </svg>
  );
}
