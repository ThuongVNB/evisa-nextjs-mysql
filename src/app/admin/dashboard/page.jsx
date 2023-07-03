'use client';
import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function page() {
  const session = useSession();
  useEffect(() => {
    console.log("session", session);
  },[])
  
  return (
    <AdminSidebar/>
  )
}
