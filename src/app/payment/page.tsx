import Payment from "@/app/_components/Payment";
import { notFound } from "next/navigation";
import React from "react";
import { z } from "zod";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;

const zodEthAddress = z.custom<`0x${string}`>((val) => {
  return ethAddressRegex.test(val as string);
});

const querySchema = z.object({
  to: zodEthAddress,
  name: z.string(),
});

const page = async (props: Props) => {
  const { searchParams } = props;

  try {
    const { to, name } = querySchema.parse(await searchParams);
    return <Payment to={to} name={name} />;
  } catch {
    return notFound();
  }
};

export default page;
