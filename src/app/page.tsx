import SingleCard from "@/components/SingleCard";

export default function Home() {
  return (
    <div>
      <header>
        <h2 className="text-center text-xl font-bold underline ">New Feeds</h2>
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  mb-20">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </div>
  );
}
