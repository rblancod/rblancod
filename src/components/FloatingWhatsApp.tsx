'use client';

import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const whatsappNumber = '506XXXXXXXX';
  const message = 'Hola! Me gustaría conocer más sobre la Cabaña Tropical.';

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all"
      aria-label="Abrir WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.945 1.247l-.335-.17-3.479.656.667-2.433-.161-.256a9.879 9.879 0 011.516-4.684 9.873 9.873 0 0112.532.856 9.875 9.875 0 012.853 6.987c0 5.45-4.424 9.874-9.876 9.874-1.583 0-3.088-.368-4.556-1.026l-.355-.187-3.686.694.712-2.604-.159-.254a9.875 9.875 0 01-1.516-5.26 9.877 9.877 0 012.465-6.554z" />
      </svg>
    </motion.button>
  );
}
