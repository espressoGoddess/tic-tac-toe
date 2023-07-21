export default function ScoreCard({ player }) {
  return (
    <aside>
      <h2>Player {player.name}</h2>
      <p>Score: {player.score}</p>
    </aside>
  );
}