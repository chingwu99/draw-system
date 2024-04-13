"use client";

import { useCallback, useState } from "react";
// import redux
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { setTimer, runTimer } from "@/redux/features/timer/TimerSlice";
import { cleanWinner } from "@/redux/features/candidate/CandidateSlice";
// import shadcn/ui
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import components
import Countdown from "./Countdown";
// import sweetalert2
import Swal from "sweetalert2";

const Timer = () => {
  const { running } = useAppSelector((state) => state.timer);
  const { candidates } = useAppSelector((state) => state.candidate);
  const dispatch = useAppDispatch();

  const [timerValue, setTimerValue] = useState(1);

  const handleSetTimer = useCallback(() => {
    if (timerValue < 1 || timerValue > 60)
      return Swal.fire({
        title: "請輸入 1-60 範圍的數字",
        confirmButtonText: "確認",
      });
    if (candidates.length === 0)
      return Swal.fire({
        title: "請輸入至少一個候選人",
        confirmButtonText: "確認",
      });

    if (running)
      return Swal.fire({
        title: "正在倒數中請稍候",
        confirmButtonText: "確認",
      });

    dispatch(setTimer(timerValue * 60));
    dispatch(runTimer());
    dispatch(cleanWinner());
  }, [timerValue, dispatch, running, candidates.length]);

  return (
    <div className="col-span-1 p-5 pb-0 md:pr-0 md:pb-5">
      <div className="max-w-full  w-full">
        <Label className="text-lg" htmlFor="lottery-key">
          抽獎時間（分鐘）
        </Label>

        <div className="flex">
          <Input
            id="lottery-key"
            placeholder="請輸入抽獎時間（分鐘）"
            type="number"
            className=" my-2 bg-gray-50"
            value={timerValue}
            onChange={(e) => {
              const value = e.target.value;

              if (value !== null && value !== undefined && value !== "") {
                setTimerValue(parseInt(value));
              }
            }}
            min={1}
            max={60}
          />

          <Button className=" m-2" onClick={handleSetTimer}>
            設定
          </Button>
        </div>
      </div>

      <Countdown />
    </div>
  );
};

export default Timer;
