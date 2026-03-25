// components/certificates/CertificatesFilter.tsx

import { certificateTypes } from "../../data/certificates";

type CertificatesFilterProps = {
  active: string | null;
  setActive: (type: string | null) => void;
};

export default function CertificatesFilter({ active, setActive }: CertificatesFilterProps) {

  const handleClick = (type: string) => {
    if (active === type) {
      setActive(null);
    } else {
      setActive(type);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {certificateTypes.map((type) => (
        <button
          key={type}
          onClick={() => handleClick(type)}
          className={`px-4 py-2 rounded-xl font-semibold hover:bg-(--text-color) hover:text-(--secondary) transition-colors duration-300
          ${ active === type ? "bg-(--text-color) text-(--secondary)" : "bg-(--secondary) text-(--text-color)" }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}