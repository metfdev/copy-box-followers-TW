import "./App.css";
import { FollowerCard } from "./FollowerCard";

const users = [
  {
    userName: 'metfdev',
    name: 'Miguel Ticaray',
    isFollowing : false,
  },
  {
    userName: 'josedev',
    name: 'Jose Prueba',
    isFollowing : true,
  },
  {
    userName: 'pedrodev',
    name: 'Pedro Prueba',
    isFollowing : false,
  },
  {
    userName: 'antoniodev',
    name: 'Antonio Prueba',
    isFollowing : true,
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing}) => (
          <FollowerCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}>
            {name}
          </FollowerCard>
        ))
      }
    </section>
  );
}
