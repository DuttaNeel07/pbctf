"use client";

import { useMemo, useState } from 'react';
import { useRetroSound } from '../hooks/useRetroSound';
import {
  getRankedScoreboard,
  getTopThree,
  RANKED_COUNT,
  BANNED_COUNT,
} from '@/data/leaderboard';
import StarsBackground from '../StarsBackground/StarsBackground';
import Footer from '../Footer/Footer';
import Podium from './Podium';
import '../landing.css';
import './LeaderboardPage.css';

const ROWS = getRankedScoreboard();
const TOP_THREE = getTopThree();

function Screw({ pos }) {
  return <span className={`lb-terminal__screw lb-terminal__screw--${pos}`} aria-hidden="true" />;
}

export default function LeaderboardPage() {
  const { playHover, playClick } = useRetroSound();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ROWS;
    return ROWS.filter((row) => row.team.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="pbctf-landing lb-page">
      <StarsBackground />
      <div className="scanlines" />
      <div className="cyber-grid" />

      {/* Minimal top bar */}
      <header className="lb-page__topbar">
        <a
          href="/"
          className="lb-page__logo"
          onMouseEnter={playHover}
          onClick={playClick}
          aria-label="PBCTF 5.0 home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pbctf-logo.svg" alt="PBCTF 5.0" />
        </a>
        <a
          href="/"
          className="lb-page__back"
          onMouseEnter={playHover}
          onClick={playClick}
        >
          <span className="lb-page__back-brackets">[</span>
          &larr; Back_to_base
          <span className="lb-page__back-brackets">]</span>
        </a>
      </header>

      <main className="lb-page__main">
        {/* Hero + podium */}
        <section className="section lb-page__hero">
          <div className="container">
            <header className="lb-page__header">
              <span className="section__label">PBCTF 5.0 // Final_Scoreboard</span>
              <h1 className="section__title">Scoreboard</h1>
              <p className="section__subtitle">
                Final standings across {RANKED_COUNT} ranked teams. Teams marked
                in red were disqualified for rule violations. They remain on the
                board but hold no rank.
              </p>
            </header>

            <Podium teams={TOP_THREE} />
          </div>
        </section>

        {/* Full board terminal */}
        <section className="section lb-page__board">
          <div className="container">
            <div className="lb-terminal">
              <Screw pos="tl" />
              <Screw pos="tr" />
              <Screw pos="bl" />
              <Screw pos="br" />

              <div className="lb-terminal__titlebar">
                <span className="lb-terminal__dot lb-terminal__dot--red" />
                <span className="lb-terminal__dot lb-terminal__dot--yellow" />
                <span className="lb-terminal__dot lb-terminal__dot--green" />
                <span className="lb-terminal__title">root@pbctf:~/scoreboard</span>
                <span className="lb-terminal__led" />
              </div>

              <div className="lb-terminal__screen">
                <div className="lb-terminal__inner">
                  <div className="lb-terminal__toolbar">
                    <label className="lb-terminal__search">
                      <span className="lb-terminal__prompt">&gt;</span>
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="grep team_name"
                        aria-label="Search teams"
                        spellCheck="false"
                        autoComplete="off"
                      />
                    </label>
                    <span className="lb-terminal__count">
                      {RANKED_COUNT} RANKED // <em>{BANNED_COUNT} BANNED</em>
                    </span>
                  </div>

                  <div className="lb-terminal__head" aria-hidden="true">
                    <span>RANK</span>
                    <span>TEAM</span>
                    <span className="lb-terminal__head-score">SCORE</span>
                  </div>

                  <ol className="lb-terminal__rows">
                    {filtered.map((row) => (
                      <li
                        key={row.team}
                        className={`lb-row${row.banned ? ' lb-row--banned' : ''}${
                          row.rank !== null && row.rank <= 3 ? ' lb-row--top' : ''
                        }`}
                      >
                        <span className="lb-row__rank">
                          {row.rank !== null ? String(row.rank).padStart(3, '0') : '---'}
                        </span>
                        <span className="lb-row__team">
                          <span className="lb-row__name">{row.team}</span>
                          {row.banned && <span className="lb-row__flag">BANNED</span>}
                        </span>
                        <span className="lb-row__score">
                          {row.score.toLocaleString('en-US')}
                        </span>
                      </li>
                    ))}
                    {filtered.length === 0 && (
                      <li className="lb-row lb-row--empty">
                        <span className="lb-row__rank">ERR</span>
                        <span className="lb-row__team">no teams match &quot;{query}&quot;</span>
                        <span className="lb-row__score">--</span>
                      </li>
                    )}
                  </ol>
                </div>
              </div>
            </div>

            <p className="lb-page__footnote">
              * Teams flagged BANNED were disqualified for rule violations and are
              excluded from the final ranking.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
