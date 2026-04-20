interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  from = "white",
  to = "white",
  flip = false,
  className = "",
}: WaveDividerProps) {
  const colorMap: Record<string, string> = {
    white: "#ffffff",
    navy: "#0d1b3e",
    "navy-dark": "#080e1e",
    gray: "#f8f9fb",
  };

  const bgColor = colorMap[from] ?? from;
  const fillColor = colorMap[to] ?? to;

  return (
    <div
      className={`relative -mt-px w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-[40px] w-full sm:h-[50px] lg:h-[60px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20C180 50 360 0 540 25C720 50 900 5 1080 25C1260 45 1350 10 1440 20V60H0V20Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
