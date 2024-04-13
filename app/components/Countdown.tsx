"use client";

import { useState, useEffect, useRef } from "react";
// import redux
import { reduceOneSecond, clearTimer } from "@/redux/features/timer/TimerSlice";
import { pickWinner } from "@/redux/features/candidate/CandidateSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
// import lib
import { calculateCountdownTime } from "@/lib/calculateCountdownTime";
// import sweetalert2
import Swal from "sweetalert2";

const Countdown = () => {
  const dispatch = useAppDispatch();
  const { timer, isSetup, running } = useAppSelector((state) => state.timer);
  const { winner } = useAppSelector((state) => state.candidate);

  const [countdownTime, setCountdownTime] = useState<{
    minutes: string;
    seconds: string;
  }>(calculateCountdownTime(timer * 60));
  const initialRenderRef = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (timeoutRef.current && timer === 0) {
      clearInterval(timeoutRef.current);

      dispatch(clearTimer());
      dispatch(pickWinner());

      Swal.fire({
        title: `恭喜${winner?.name}中獎！`,
        confirmButtonText: `重新抽獎`,
      });
    }

    setCountdownTime(calculateCountdownTime(timer));
  }, [timer, dispatch, winner?.name]);

  useEffect(() => {
    if (!running) return;
    timeoutRef.current = setInterval(() => {
      dispatch(reduceOneSecond());
    }, 1000);

    return () => clearInterval(timeoutRef.current);
  }, [running, dispatch]);
  return (
    <div className="flex flex-wrap items-center space-x-2 text-2xl max-w-full  w-full">
      <span className="font-semibold">開獎倒數時間還有：</span>
      <span className="font-semibold">
        {!isSetup && "00:00"}
        {isSetup && `${countdownTime.minutes}:${countdownTime.seconds}`}
      </span>
    </div>
  );
};

export default Countdown;
