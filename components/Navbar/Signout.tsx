"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function SonnerDemo() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <Button
      variant="outline"
      onClick={async () => {
        setLoading(true);
        try {
          const res = await axios.get("/api/signout");
          const data = await res.data;
          console.log(data);
          router.refresh();
          setLoading(false);
        } catch (error) {
          console.log("error", error);
        }
      }}
    >
      Log out
      {loading ? (
        <span>
          <Spinner />
        </span>
      ) : (
        ""
      )}
    </Button>
  );
}
