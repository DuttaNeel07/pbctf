"use client";

import dynamic from "next/dynamic";

// Client-only mount, same as the landing page: the scoreboard reuses the
// landing components (canvas starfield, sessionStorage-backed sound hook).
const LeaderboardPage = dynamic(
  () => import("@/components/landing/Leaderboard/LeaderboardPage"),
  { ssr: false }
);

export default function LeaderboardClient() {
  return <LeaderboardPage />;
}
