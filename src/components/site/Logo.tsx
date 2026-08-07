
type Variant = "color" | "mono" | "mono-white" | "icon";

export function Logo({
  variant = "color",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const logoColorUrl = '/CreoGrid-LogoColor.png'
  const logoMonoUrl = '/CreoGrid-LogoMono.png'
  const logoMonoWhiteUrl = '/CreoGrid-LogoMonoWhite.png'
  const src =
    variant === "mono" ? logoMonoUrl : variant === "icon" ? logoColorUrl : variant === "mono-white" ? logoMonoWhiteUrl : logoColorUrl;
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
