
type Variant = "color" | "mono" | "icon";

export function Logo({
  variant = "color",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const logoColorUrl = '/CreoGrid-LogoColor.png'
  const logoMonoUrl = '/CreoGrid-LogoMono.png'
  const src =
    variant === "mono" ? logoMonoUrl : variant === "icon" ? logoColorUrl : logoColorUrl;
  return (
    <img
      src={src}
      alt="CreoGrid"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
