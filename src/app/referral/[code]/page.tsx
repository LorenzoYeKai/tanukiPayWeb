import { notFound } from "next/navigation";
import React from "react";
import { z } from "zod";
import SignUp from "@/app/_components/SignUp";

const codeSchema = z.string().uuid();

type Props = {
  params: Promise<{ code: string }>;
};

const page = async (props: Props) => {
  try {
    const code = codeSchema.parse(
      await props.params.then((params) => params.code)
    );
    return <SignUp code={code} />;
  } catch {
    notFound();
  }
};

export default page;
