/**
 * Skeleton Loading Components
 * Display placeholder content while loading data
 */

export const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
  </div>
);

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-3 animate-pulse">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-gray-200 rounded w-full"
        style={{
          width: i === lines - 1 ? "80%" : "100%",
        }}
      ></div>
    ))}
  </div>
);

export const SkeletonImage = ({
  width = "w-full",
  height = "h-48",
}: {
  width?: string;
  height?: string;
}) => (
  <div
    className={`${width} ${height} bg-gray-200 rounded-lg animate-pulse`}
  ></div>
);

export const SkeletonButton = () => (
  <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
);

export const SkeletonGrid = ({ items = 4 }: { items?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: items }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);
