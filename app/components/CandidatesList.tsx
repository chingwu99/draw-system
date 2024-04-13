"use client";

import { useState } from "react";
// import redux
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { addCandidate } from "@/redux/features/candidate/CandidateSlice";
// import uuid
import { v4 as uuidv4 } from "uuid";
// import shadcn/ui
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import components
import CandidateItem from "./CandidateItem";
// import icons
import { FaPlus } from "react-icons/fa";
// import sweetalert2
import Swal from "sweetalert2";

const CandidatesList = () => {
  const [nameValue, setNameValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSetTimer = () => {
    if (!nameValue)
      return Swal.fire({
        title: "請輸入抽獎人員姓名",
        confirmButtonText: "確認",
      });
    dispatch(addCandidate({ name: nameValue, key: uuidv4() }));
    setNameValue("");
  };

  const { candidates } = useAppSelector((state) => state.candidate);

  return (
    <div className="col-span-1 p-5 pt-0 md:pl-0 md:pt-5">
      <div className="max-w-full  w-full">
        <Label className="text-lg" htmlFor="lottery-key">
          新增抽獎人員
        </Label>
        <div className="flex">
          <Input
            id="lottery-key"
            placeholder="請輸入抽獎人員姓名"
            className=" my-2 bg-gray-50"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />

          <Button
            className="m-2 ml-3 mr-5 bg-green-700 text-white hover:bg-green-800"
            onClick={handleSetTimer}
            size="icon"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="p-4 h-[300px] overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 gap-4">
            {candidates.length ? (
              candidates.map((candidate) => (
                <CandidateItem key={candidate.key} candidate={candidate} />
              ))
            ) : (
              <p className="m-auto">目前沒有抽獎人員</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidatesList;
