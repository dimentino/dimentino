"use client";
import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get("name");
  const pathName = usePathname();
  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
        Go Home {pathName}
      </button>
    </div>
  );
};

export default PropertyPage;
