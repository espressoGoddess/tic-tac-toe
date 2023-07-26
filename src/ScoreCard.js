export default function ScoreCard({ player }) {
  return (
    <aside className='ScoreCard'>
      <h3>{player.name}</h3>
      <p>Token: {player.token}</p>
      <p>Score: {player.score}</p>
    </aside>
  );
}