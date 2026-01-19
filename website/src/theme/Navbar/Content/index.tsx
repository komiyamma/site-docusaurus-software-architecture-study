import React, {type ReactNode} from 'react';
import Content from '@theme-original/Navbar/Content';
import type ContentType from '@theme/Navbar/Content';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof ContentType>;

const ScrollButton = ({direction, onClick}: {direction: 'left' | 'right', onClick: () => void}) => (
  <button 
    className={`navbar__scroll-btn navbar__scroll-btn--${direction}`}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    aria-label={`Scroll ${direction}`}
    type="button"
  >
    {direction === 'left' ? '◀' : '▶'}
  </button>
);

export default function ContentWrapper(props: Props): ReactNode {
  const scroll = (direction: 'left' | 'right') => {
    // Select the scrollable container. 
    // Note: We use querySelector because the underlying Content component structure is opaque.
    const container = document.querySelector('.navbar__items');
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Content {...props} />
      <ScrollButton direction="left" onClick={() => scroll('left')} />
      <ScrollButton direction="right" onClick={() => scroll('right')} />
    </>
  );
}
