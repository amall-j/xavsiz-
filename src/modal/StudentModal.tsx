interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-lg font-bold"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
