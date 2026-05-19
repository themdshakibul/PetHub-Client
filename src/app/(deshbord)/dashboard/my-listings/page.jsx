import MyListingCard from "@/Components/App/MyListing/MyListingCard";
import MyListingsHeader from "@/Components/App/MyListing/MyListingsHeader";

const MyListingPage = () => {
  return (
    <section>
      <MyListingsHeader />
      <div className="grid grid-cols-3 gap-5">
        <MyListingCard />
      </div>
    </section>
  );
};

export default MyListingPage;
