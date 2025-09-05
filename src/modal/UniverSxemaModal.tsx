import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full h-full flex items-center justify-center">
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={8}
          centerOnInit
        >
          <TransformComponent>
            <img
              src={src}
              alt={alt}
              className="h-[90vh] w-[90vw] object-contain"
            />
          </TransformComponent>
        </TransformWrapper>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}