"use client";
import Image from "next/image";
import React from "react";

type Props = {
  to: string;
  name: string;
};

const trimAddress = (address: string | undefined | null) => {
  if (!address) return "";
  // if it's not an ethereum address, return it as it is
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return address;
  // otherwise, return the first 4 and last 4 characters
  const length = address.length;
  return `${address.slice(0, 4)}...${address.slice(length - 4, length)}`;
};

const Payment = (props: Props) => {
  const { to, name } = props;
  const redirecttoNativeApp = () => {
    try {
      document.location = "com.tanuki-pay://payment?to=" + to + "&name=" + name;
    } catch {
      alert(
        "TanukiPay not installed, redirect to app store not implemented yet"
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src="/iconSquared.jpeg"
          alt="Logo"
          className="w-[128px] h-[128px]"
          width={512}
          height={512}
        />
      </div>
      <p>
        Send USDC to {name} ({trimAddress(to)})
      </p>
      <button
        onClick={() => {
          redirecttoNativeApp();
        }}
        className="bg-[#00cc7a] w-fit px-8 py-1 rounded-2xl font-bold"
      >
        Open in TanukiPay
      </button>
    </div>
  );
};

export default Payment;
