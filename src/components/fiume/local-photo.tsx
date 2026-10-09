import type { ImgHTMLAttributes } from "react";

type PhotoProps = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

export function LocalPhoto({
  src,
  alt,
  sizes = "(max-width: 900px) calc(100vw - 40px), 600px",
  loading = "lazy",
  ...props
}: PhotoProps) {
  const responsive = src.startsWith("/media/") && src.endsWith(".webp");
  return (
    <img
      width={1000}
      height={734}
      decoding="async"
      loading={loading}
      src={src}
      srcSet={
        responsive
          ? `${src.replace(".webp", "-480.webp")} 480w, ${src.replace(".webp", "-768.webp")} 768w, ${src} 1000w`
          : undefined
      }
      sizes={responsive ? sizes : undefined}
      alt={alt}
      {...props}
    />
  );
}
