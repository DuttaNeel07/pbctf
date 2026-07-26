import { useRetroSound } from '../hooks/useRetroSound';
import './Podium.css';

const PLACE_CLASS = ['first', 'second', 'third'];

function Screw({ pos }) {
  return <span className={`lb-podium__screw lb-podium__screw--${pos}`} aria-hidden="true" />;
}

export default function Podium({ teams }) {
  const { playHover } = useRetroSound();

  if (!teams || teams.length < 3) return null;

  return (
    <div className="lb-podium">
      {teams.slice(0, 3).map((entry, i) => (
        <article
          key={entry.team}
          className={`lb-podium__card lb-podium__card--${PLACE_CLASS[i]}`}
          onMouseEnter={playHover}
        >
          <Screw pos="tl" />
          <Screw pos="tr" />
          <Screw pos="bl" />
          <Screw pos="br" />

          <div className="lb-podium__top">
            <span className="lb-podium__rank-label">RANK_{String(entry.rank).padStart(2, '0')}</span>
            <span className="lb-podium__led" />
          </div>

          <div className="lb-podium__screen">
            <span className="lb-podium__place">#{entry.rank}</span>
            <h3 className="lb-podium__team">{entry.team}</h3>
            <span className="lb-podium__score">
              {entry.score.toLocaleString('en-US')} PTS
            </span>
          </div>

          <div className="lb-podium__badge">PBCTF5.0 // FINAL</div>
        </article>
      ))}
    </div>
  );
}
