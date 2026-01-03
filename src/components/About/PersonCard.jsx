function PersonCard({person, isExpanded, onClick}) {
  return (
    <div
      className={`card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => onClick(person.id)}
    >
      <div className='front'>
        <div className='image-container'>
          <img src={person.imageUrl} alt={person.name} />
        </div>
        <div className='meta'>
          <div className='name'>{person.name}</div>
          <div className='role'>{person.role}</div>
          {person.subtitle && <div className='subtitle'>{person.subtitle}</div>}
          {!isExpanded && <div className='tap-text'>Click to learn more</div>}
        </div>
      </div>
      <div className='description' aria-hidden={!isExpanded}>
        <p>{person.description}</p>
      </div>
    </div>
  );
}

export default PersonCard;
