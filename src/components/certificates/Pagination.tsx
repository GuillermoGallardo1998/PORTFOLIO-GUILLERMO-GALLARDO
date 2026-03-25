// components/certificates/Pagination.tsx

import { certificates } from "../../data/certificates";
import { useLanguage } from "../../context/language/hook";

type PaginationProps = {
  page: number;
  setPage: (n: number) => void;
  filter: string | null;
};

export default function Pagination({ page, setPage, filter }: PaginationProps) {
  const { language } = useLanguage();

  const filteredCertificates =
    filter === null
      ? certificates
      : certificates.filter(cert => cert.type === filter);

  const perPage = 12;
  const totalPages = Math.ceil(filteredCertificates.length / perPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-10 gap-3 flex-wrap">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`
          relative px-4 py-2 font-semibold rounded-xl bg-(--secondary) text-(--text-color) transition-colors duration-300
          ${page === 1
            ? "cursor-not-allowed pointer-events-none"
            : "hover:bg-(--text-color) hover:text-(--secondary)"
          }
        `}
      >
        {page === 1 ? "🚫" : language === "es" ? "Previo" : "Previous"}
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-4 py-2 font-semibold rounded-xl transition-transform duration-300
            ${page === i + 1
              ? "bg-(--text-color) text-(--secondary)"
              : "bg-(--secondary) text-(--text-color) hover:bg-(--text-color) hover:text-(--secondary)  hover:scale-80"
            }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={`
          relative px-4 py-2 font-semibold rounded-xl bg-(--secondary) text-(--text-color) transition-colors duration-300
          ${page === totalPages
            ? "cursor-not-allowed pointer-events-none"
            : "hover:bg-(--text-color) hover:text-(--secondary)"
          }
        `}
      >
        {page === totalPages ? "🚫" : language === "es" ? "Siguiente" : "Next"}
      </button>
    </div>
  );
}