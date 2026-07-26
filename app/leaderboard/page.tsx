import type { Metadata } from "next";
import LeaderboardClient from "./leaderboard-client";

export const metadata: Metadata = {
  title: "Scoreboard",
  description:
    "Final PBCTF 5.0 standings. Every ranked team, every score, and the ones that didn't play fair.",
};

export default function LeaderboardRoute() {
  return <LeaderboardClient />;
}
