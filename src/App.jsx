import GameHeader from  './components/GameHeader';
import MisionCard from './components/MisionCard';
import PlayerCard from './components/PlayerCard';

function App() {
  return (
    <main style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}> 
      {/* Aqui usas tus componentes */}
      <GameHeader/>

      <div style={{ display: 'flex', gab: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px'}}>
      <PlayerCard
        nombre="🧙 Mago Pixel"
        nivel={1}
        vidas="❤️❤️❤️"
      />
      <PlayerCard
        nombre="👁️ Brujo Pixel"
        nivel={4}
        vidas="❤️❤️❤️"
      />
      <PlayerCard
        nombre="🐈‍⬛Gato Negro Pixel"
        nivel={1}
        vidas="❤️❤️❤️❤️❤️❤️❤️"
      />
       <MisionCard
       simbolo="🧙"
       descripcion="Matar al brujo"
      />
       <MisionCard
       simbolo="👁️"
       descripcion="Matar al mago"
      />
       <MisionCard
       simbolo="🐈‍⬛"
       descripcion="Avisar sobre la mala suerte"
      />
    </div>
    </main>
  );
}

export default App;