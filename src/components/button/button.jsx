import React from "react";

function Button({ text, href}) {
  return (
		<a href={href} className='hero__link' target='_blank' rel='noreferrer'>
			{text}
		</a>
	);
}

export default Button;
