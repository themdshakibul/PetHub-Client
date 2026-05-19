import AdoptionRequestsHeader from "@/Components/App/MyRequist/AdoptionRequestsHeader";
import AdoptionStats from "@/Components/App/MyRequist/AdoptionStats";

export default function MyRequistPage() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-2">
        {/* Header */}
        <AdoptionRequestsHeader />
        <AdoptionStats />
      </div>
    </div>
  );
}
