// Final PBCTF 5.0 scoreboard, exported from the CTFd admin panel (26 Jul 2026).
// Teams hidden on the CTFd public scoreboard (admin/test accounts) are excluded.
// Teams flagged `banned` were disqualified for rule violations — they stay on
// the public board (marked red) but hold no rank.

export interface LeaderboardEntry {
  team: string;
  score: number;
  banned?: boolean;
}

export interface RankedEntry extends LeaderboardEntry {
  rank: number | null;
}

// Descending score order; CTFd tie order preserved.
export const SCOREBOARD: LeaderboardEntry[] = [
  { team: "z0d1ak", score: 10023, banned: true },
  { team: "ISFCR PESU", score: 9599 },
  { team: "Light Bringers", score: 9598 },
  { team: "desync", score: 9448 },
  { team: "lame", score: 9349 },
  { team: "ctrl-alt-elite", score: 8969 },
  { team: "Hang_Shangyan", score: 8798, banned: true },
  { team: "PRISM", score: 8399, banned: true },
  { team: "2mb", score: 8359 },
  { team: "Unr3qu!ted", score: 8350 },
  { team: "Windows12Devs", score: 8299, banned: true },
  { team: "Fusion X", score: 7770 },
  { team: "BlueWater", score: 7685 },
  { team: "Ex0rcists", score: 7449 },
  { team: "Spirit", score: 6650 },
  { team: "0N1Y_Fl4G$", score: 6299 },
  { team: "cyber bullied", score: 5825 },
  { team: "w00f.exe", score: 5800 },
  { team: "TR1N3TRA", score: 5754 },
  { team: "CyberVITics", score: 5500 },
  { team: "fs0cie1y", score: 5400 },
  { team: "knockout-club", score: 5350 },
  { team: "TF141", score: 4700 },
  { team: "127.0.0.1", score: 4450 },
  { team: "rajmarockets", score: 4300 },
  { team: "B1NGO", score: 4020 },
  { team: "JOBLESSAKMANLABS", score: 3860 },
  { team: "Payload", score: 3850 },
  { team: "missingHat", score: 3850 },
  { team: "Rangers", score: 3750 },
  { team: "Red Water", score: 3650 },
  { team: "dread", score: 3580 },
  { team: "vyadh", score: 3550 },
  { team: "manugowda19", score: 3450 },
  { team: "machine ain't learning", score: 3325 },
  { team: "Kyrark", score: 3250 },
  { team: "hop-hop", score: 2950 },
  { team: "cachecontrol", score: 2900 },
  { team: "Pwn_0x0", score: 2800 },
  { team: "qwerty-bro", score: 2750 },
  { team: "G_Capturors", score: 2650 },
  { team: "BMS Cipher", score: 2600 },
  { team: "BreakingCode", score: 2580 },
  { team: "CybertronSec", score: 2550 },
  { team: "Team_vaikartana", score: 2550 },
  { team: "EDITH", score: 2450 },
  { team: "Zero-glitch", score: 2350 },
  { team: "CTRL + FLOW", score: 2300 },
  { team: "Shubhanalla riders club", score: 2285 },
  { team: "jeffthelandshark", score: 2170 },
  { team: "Root Force", score: 2150 },
  { team: "LIL_kids", score: 2100 },
  { team: "Xyphos", score: 2050 },
  { team: "F_squad", score: 2000 },
  { team: "LLMFAO", score: 2000 },
  { team: "Cortex", score: 2000 },
  { team: "Zenith_Zero", score: 1890 },
  { team: "BlackArc", score: 1800 },
  { team: "Espada", score: 1675 },
  { team: "Moonlander", score: 1600 },
  { team: "Cyber Castle", score: 1550 },
  { team: "heist", score: 1545 },
  { team: "Two Invisible", score: 1500 },
  { team: "rip_engineers", score: 1420 },
  { team: "waterbottle", score: 1400 },
  { team: "Nebula", score: 1400 },
  { team: "cinnaaa", score: 1350 },
  { team: "Innovat3 X", score: 1340 },
  { team: "Simple", score: 1300 },
  { team: "ns10", score: 1295 },
  { team: "straw_hat_pirates", score: 1275 },
  { team: "Solo leveling", score: 1200 },
  { team: "shiva", score: 1200 },
  { team: "VOID", score: 1200 },
  { team: "rtx6090", score: 1150 },
  { team: "Team Asgard", score: 1150 },
  { team: 'HelloWorld("Secure")', score: 1100 },
  { team: "Cryo Kernel", score: 1100 },
  { team: "frierens party", score: 1040 },
  { team: "Gr4c3", score: 1000 },
  { team: "RED", score: 1000 },
  { team: "Phantom Packet", score: 970 },
  { team: "B-Sirius", score: 950 },
  { team: "NeoCipher", score: 920 },
  { team: "OldMonk", score: 900 },
  { team: "R00K", score: 870 },
  { team: "Shellphish", score: 850 },
  { team: "shadow_f0rces", score: 850 },
  { team: "404 Team Not Found", score: 825 },
  { team: "Sudo Squad", score: 800 },
  { team: "Code_o", score: 750 },
  { team: "codverse", score: 750 },
  { team: "PacketPirates", score: 700 },
  { team: "Professor", score: 650 },
  { team: "squirtle_squad", score: 595 },
  { team: "tejas", score: 500 },
  { team: "Hashiras", score: 500 },
  { team: "Adidas", score: 500 },
  { team: "Koumei's Dices", score: 470 },
  { team: "Chopped_Rice", score: 450 },
  { team: "HACK256X", score: 450 },
  { team: "H5X", score: 400 },
  { team: "arena-cd2d89", score: 400 },
  { team: "CTFSlayers", score: 355 },
  { team: "ctf coders", score: 300 },
  { team: "Bytex", score: 300 },
  { team: "License check", score: 295 },
  { team: "m", score: 260 },
  { team: "Decode", score: 250 },
  { team: "Pirates", score: 200 },
  { team: "cairo", score: 200 },
  { team: "reggie", score: 145 },
  { team: "sdhusdhus", score: 145 },
  { team: "Secure_dude", score: 100 },
  { team: "oxmanyu", score: 100 },
  { team: "CyberOps Maecos", score: 100 },
  { team: "hackforge", score: 100 },
  { team: "cryptonite", score: 25 },
  { team: "Team svap", score: 20 },
  { team: "headme", score: 15 },
  { team: "test123", score: 10 },
  { team: "Flaggers United", score: 5 },
  { team: "balaa", score: 0 },
  { team: "kinjalyari", score: 0 },
  { team: "WDF", score: 0 },
];

export function getRankedScoreboard(): RankedEntry[] {
  let rank = 0;
  return SCOREBOARD.map((entry) =>
    entry.banned ? { ...entry, rank: null } : { ...entry, rank: ++rank }
  );
}

export function getTopThree(): RankedEntry[] {
  return getRankedScoreboard()
    .filter((entry) => entry.rank !== null)
    .slice(0, 3);
}

export const RANKED_COUNT = SCOREBOARD.filter((e) => !e.banned).length;
export const BANNED_COUNT = SCOREBOARD.filter((e) => e.banned).length;
