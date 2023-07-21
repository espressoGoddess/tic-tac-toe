export default function ScoreCard({ player }) {
  return (
    <aside className='ScoreCard'>
      <h2>{player.name}</h2>
      <p>Score: {player.score}</p>
    </aside>
  );
}