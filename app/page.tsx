// import components
import Timer from "./components/Timer";
import CandidatesList from "./components/CandidatesList";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-3 md:p-10 ">
      <div className="grid md:grid-cols-2 items-start md:items-center  w-full  gap-4 bg-white rounded-lg">
        <Timer />
        <CandidatesList />
      </div>
    </div>
  );
}
