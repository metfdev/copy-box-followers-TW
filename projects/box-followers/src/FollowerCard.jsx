import { useState } from "react"

export function FollowerCard({userName, children, initialIsFollowing}) {
  const [isFollowing, setIsFollowingState] = useState(initialIsFollowing)

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing
    ? 'followerCard__button followerCard__button--following'
    : 'followerCard__button'

  const changeState = () => {
    setIsFollowingState(!isFollowing)
  }

  return (
    <article className="followerCard">
      <header className="followerCard__header">
        <img
          className="followerCard__avatar"
          alt="avatar"
          src={`https://unavatar.io/${userName}`} />
        <div className="followerCard__info">
          <strong>{children}</strong>
          <span className="followerCard__infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClass} onClick={changeState}>
          <span className="followerCard__text">{buttonText}</span>
          <span className="followerCard__stopFollowing">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}