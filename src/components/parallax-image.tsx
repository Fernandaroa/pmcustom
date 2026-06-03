import { useParallax } from "@/hooks/use-parallax";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { speed?: number };

export function ParallaxImage({ speed = 0.25, className = "", ...rest }: Props) {
  const ref = useParallax<HTMLImageElement>(speed);
  return (
    <img
      ref={ref}
      {...rest}
      className={className}
      style={{ willChange: "transform", ...(rest.style || {}) }}
    />
  );
}
