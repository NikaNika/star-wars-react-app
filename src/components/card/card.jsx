import React from "react";
import Button from "../button/button";
import './card.css'

function Card({ hero }) {
  const src = 'assets/img/heroes/' + hero.name.split(' ').join('') + '.png';
  console.log(src)
  return (
		<div className='card'>
      <h2>{hero.name}</h2>
      <img src={src} alt={hero.name} />			
			<ul>
				<li>
					<span className='hero__property'>height:</span>{' '}
					<span>{hero.height}</span>
				</li>
				<li>
					<span className='hero__property'>mass:</span> <span>{hero.mass}</span>
				</li>
				<li>
					<span className='hero__property'>hair color:</span>{' '}
					<span>{hero.hair_color}</span>
				</li>
				<li>
					<span className='hero__property'>skin color:</span>{' '}
					<span>{hero.skin_color}</span>
				</li>
				<li>
					<span className='hero__property'>eye color:</span>{' '}
					<span>{hero.eye_color}</span>
				</li>
				<li>
					<span className='hero__property'>birth year:</span>{' '}
					<span>{hero.birth_year}</span>
				</li>
				<li>
					<span className='hero__property'>gender:</span>{' '}
					<span>{hero.gender}</span>
				</li>
			</ul>			
			<Button text = {'See more...'} href = {hero.url} />
		</div>
	);
}

export default Card;
