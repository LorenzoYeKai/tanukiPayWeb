"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createClient } from "@/utils/supabase/client";

type Props = {
  code: string;
};

const SignUp = (props: Props) => {
  const { code } = props;

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const supabase = createClient();

  async function signInWithOtp() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        data: {
          referrer_id: code,
        },
      },
    });

    setLoading(false);
    if (error) {
      alert(error.message);
      return;
    }
  }

  async function signInWithGoogle() {
    alert("Not implemented yet");
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center gap-6 max-w-[380px] w-[380px] min-h-[500px] md:border border-gray-500 rounded-xl p-4">
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/iconSquared.jpeg"
            alt="Logo"
            className="w-[128px] h-[128px]"
            width={512}
            height={512}
          />
          <p className="text-2xl font-bold">
            TANUKI <span className="text-[#00cc7a]">PAY</span>
          </p>
        </div>
        <p className="font-bold">Sign up</p>
        <input
          type="text"
          placeholder="email@address.com"
          className="border-b-gray-500 border-b outline-none bg-transparent w-[80%] text-sm py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <button
            className={`flex justify-center items-center gap-1  text-white p-2 rounded-full w-[80%]`}
            style={{ backgroundColor: loading || !email ? "#ccc" : "#00cc7a" }}
            disabled={loading || !email}
            onClick={signInWithOtp}
          >
            <p className="font-semibold leading-none">Sign up with email</p>
          </button>
          <button
            className="flex justify-center items-center gap-1 bg-[#00cc7a] text-white p-2 rounded-full w-[80%]"
            type="button"
            onClick={signInWithGoogle}
          >
            <FaGoogle />
            <p className="font-semibold leading-none">Sign up with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
