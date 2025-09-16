import { X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal = ({ src, alt, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="  w-max h-max  mx-auto flex items-center justify-center "
        onClick={(e) => e.stopPropagation()}
      >
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          centerOnInit
        >
          <TransformComponent>
            <img
              src={src}
              alt={alt}
              className="max-w-[60vw] max-h-[70vh] object-contain"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div
        className="absolute top-12 right-12  text-white cursor-pointer"
        onClick={onClose}
      >
        <X size={40} />
      </div>
    </div>
  );
};
