export default function LinkedInIcon({
  size = 18,
  fill = "currentColor",
}: {
  size?: number;
  fill?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 7.5H4.5V20.5h3V7.5zM6 3a2 2 0 100 4 2 2 0 000-4zM20.5 19.5v-7.6c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6.9-3.1 1.6V7.5h-3v13h3v-7.2c0-.4 0-.7.2-1 .3-.7 1-1.5 2.2-1.5 1.6 0 2.2 1.2 2.2 2.9v6.8h3.4z"
        fill={fill}
      />
    </svg>
  );
}
