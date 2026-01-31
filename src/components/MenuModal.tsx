import { X } from "lucide-react";
import Menu from "./Menu";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative h-full overflow-y-auto">
        <div className="min-h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-16 sm:top-20 right-4 sm:right-6 md:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu Content */}
          <div className="pt-24 pb-12">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
