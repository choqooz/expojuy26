import type { ContextImageAsset } from "../data";

interface ContextImageProps {
  asset: ContextImageAsset;
  className?: string;
}

export function ContextImage({ asset, className = "" }: ContextImageProps) {
  return (
    <figure className={`context-image ${className}`.trim()}>
      <div className="context-image-frame" style={{ aspectRatio: `${asset.width} / ${asset.height}` }}>
        <picture>
          <source srcSet={asset.src} type="image/webp" />
          <img
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 75rem) 38rem, (min-width: 48rem) 44vw, calc(100vw - 2.5rem)"
            style={{ objectPosition: asset.objectPosition }}
          />
        </picture>
      </div>
      <figcaption><span>Imagen ilustrativa</span><p>{asset.caption}</p></figcaption>
    </figure>
  );
}
