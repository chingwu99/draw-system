"use client";

import Image from "next/image";
// import redux
import { useAppDispatch } from "@/redux/hook";
import { removeCandidate } from "@/redux/features/candidate/CandidateSlice";
// import shadcn/ui
import { Button } from "@/components/ui/button";
import { Candidate } from "@/redux/features/candidate/types";
// import icons
import { FaTrash } from "react-icons/fa6";
interface CandidateItemProps {
  candidate: Candidate;
}

const CandidateItem = ({ candidate }: CandidateItemProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeCandidate(candidate.key));
  };
  return (
    <div
      className="flex items-center justify-between space-x-2 border-b-2 "
      key={candidate.name}
    >
      <div className="flex items-center">
        <Image
          className=" rounded-full"
          height="40"
          width="40"
          alt="Avater"
          src={"/placeholder.jpg"}
        />

        <span className="font-semibold mx-3">{candidate.name}</span>
      </div>

      <Button
        className=" my-2 bg-red-700 text-white hover:bg-red-800"
        onClick={handleDelete}
        size="icon"
      >
        <FaTrash />
      </Button>
    </div>
  );
};

export default CandidateItem;
