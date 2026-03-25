// components/certificates/CertificatesGrid.tsx

import { useState, useEffect, useMemo } from "react";
import { certificates } from "../../data/certificates";
import { useLanguage } from "../../context/language/hook";
import CertificatesSkeleton from "./CertificatesSkeleton";

type CertificatesGrid = {
  filter: string | null;
  page: number;
};

export default function CertificatesGrid({ filter, page }: CertificatesGrid) {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentDataKey = `${filter}-${page}`;
  
  const [loadedKey, setLoadedKey] = useState<string | null>(null);

  const paginatedCertificates = useMemo(() => {
    const filtered = filter === null 
      ? certificates 
      : certificates.filter(cert => cert.type === filter);
    const perPage = 12;
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filter, page]);

  const isVisualLoading = loadedKey !== currentDataKey;

  useEffect(() => {
    if (loadedKey !== currentDataKey) {
      const loadImage = (src: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; 
        });
      };

      const minTimePromise = new Promise((resolve) => setTimeout(resolve, 3000));
      const imagePromises = paginatedCertificates.map(cert => loadImage(cert.image));

      Promise.all([minTimePromise, ...imagePromises]).then(() => {
        setLoadedKey(currentDataKey);
      });
    }
  }, [currentDataKey, paginatedCertificates, loadedKey]);

  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  return (
    <section className="relative min-h-150">
      {isVisualLoading && <CertificatesSkeleton />}
      <div
        className={`${isVisualLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 gridFade grid'}  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
        onContextMenu={handleContextMenu}
      >
        {paginatedCertificates.map((cert, i) => (
          <div
            key={`${cert.name[language]}-${i}`}
            className="rounded-xl overflow-hidden componentShadowSoft cursor-pointer"
            onClick={() => setSelectedImage(cert.image)}
          >
            <img
              src={cert.image}
              alt={cert.name[language]}
              loading="eager"
              decoding="async"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-60 object-cover transform transition-opacity duration-300 opacity-100 hover:opacity-50 select-none"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-400 p-6"
          onClick={() => setSelectedImage(null)}
          onContextMenu={handleContextMenu}
        >
          <img
            src={selectedImage}
            alt="Certificate View"
            onContextMenu={(e) => e.preventDefault()}
            className="max-h-[90vh] max-w-[90vw] rounded-xl componentShadowStrong select-none"
          />
        </div>
      )}
    </section>
  );
}