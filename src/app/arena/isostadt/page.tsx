export const dynamic = 'force-dynamic';
export const revalidate = 0;

import IsostadtClientLoader from "@/components/arena/isostadt/IsostadtClientLoader";

export default function ArenaIsostadtPage() {
  return (
    <main className="p-0 m-0 max-w-none">
      <IsostadtClientLoader />
    </main>
  );
}
