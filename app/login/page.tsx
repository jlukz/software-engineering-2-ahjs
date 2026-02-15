"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1>Select Login Type</h1>

      <div>
        <Link href="/login/accountant">Accountant Login</Link>

        <Link href="/login/client">Client Login</Link>
      </div>
    </div>
  );
}
