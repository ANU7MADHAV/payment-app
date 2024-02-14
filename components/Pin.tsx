"use client";

import { pinDataSate } from "@/atoms/pinDataAtom";
import OtpInput from "react-otp-input";
import { useRecoilState } from "recoil";

export default function Pin() {
  const [pin, setPin] = useRecoilState(pinDataSate);
  console.log(pin, "pin");

  return (
    <OtpInput
      inputStyle="border"
      value={pin}
      onChange={setPin}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}
