import React, { useState } from 'react';
import './Card.css'; // Import your CSS file for styling

const Card = ({ imageUrl, imageAlt, title, description, author, role, imageDate }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <img src={imageUrl} alt={imageAlt} className="card-image" />
      {!expanded && <div className="overlay" onClick={toggleExpansion}>Learn More</div>}
      <div className="dots">
        <span className="dot-blue"></span>
        <span className="dot-yellow"></span>
      </div>
      {!expanded && (
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card-footer">
            <span>
              {author} - {role}
            </span>
            <span>{imageDate}</span>
          </div>
        </div>
      )}
      {expanded && (
        <div className="expanded-card">
          <div className="expanded-content">
            <button className="close-button" onClick={toggleExpansion}>X</button>
            <div className="author-profile">
              <img src={author.profilePhoto} alt={`${author.name}'s Profile`} className="profile-photo" />
              <div>
                <h3>{author.name}</h3>
                <p>{author.bio}</p>
              </div>
            </div>
            <h3 className="expanded-title">{title}</h3>
            <p className="expanded-description">{description}</p>
            <div className="card-footer">
              <span>
                {author.name} - {role}
              </span>
              <span>{imageDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
