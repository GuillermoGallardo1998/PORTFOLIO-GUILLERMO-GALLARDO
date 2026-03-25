// components/certificates/CertificatesSkeleton.tsx

export default function CertificatesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl h-60 bg-(--button-active)">
          <div className="absolute inset-0 shimmer">
          </div>
        </div>
      ))}
    </div>
  );
}