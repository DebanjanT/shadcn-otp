"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import Otp from "@/components/ui/otp";

const Home = () => {
  const [otp, setOtp] = useState<number>(0);
  
  const handleOtpChange = (value: number) => {
    setOtp(value);
  };

  return (
    <div className="ml-2 mt-2">
      <p>Shadcn OTP</p>
      <hr className="my-2" />

      <Otp length={4} otp={otp} onOtpChange={handleOtpChange} />

      <div>
        <p className="mt-2">Entered OTP: {otp}</p>
        
        <p className="text-xs text-slate-500">
          Shadcn Component by: Debanjan Tewary
        </p>
        <p className="text-xs text-slate-500">
          Base Component by: Full Stack Niraj
        </p>
      </div>

    </div>
  );
};

export default Home;
