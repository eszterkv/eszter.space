---
layout: post
title:  Expanding mobile menu with CSS
date:   2020-04-07 21:27 +0200
---

Menu:

```css
nav {
  position: fixed;
  bottom: 20px;
  left: 10px;
  cursor: pointer;

  ${({ open, itemsLength }) => open ? `
    width: 200px;
    height: ${itemsLength * 32 + 50}px;
  ` : `
    width: 40px;
    height: 40px;
  `};

  background: white;
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(22, 22, 22, .15);
  padding: 0 20px;
  transition: width .3s ease, height .3s ease;
}

// toggle
const Toggle = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const ToggleIcon = styled.div<{ open: boolean }>`
  ${({ open }) => !open && `
    top: -3px;
    right: 6px;
    width: 18px;
    height: 2px;
    background: grey;
  `}
  &::before,
  &::after {
    display: block;
    content: '';
    position: relative;
    background: grey;
    height: 2px;
    width: ${({ open }) => open ? '22px' : '18px'};
    transition: all .2s ease;
  }
  ${({ open }) => open ? `
    &::before {
      transform: rotate(45deg);
      top: 2px;
    }
    &::after {
      transform: rotate(135deg);
    }
  ` : `
    width: 18px;
    &::before {
      transform: none;
      top: -6px;
    }
    &::after {
      transform: none;
      top: 4px;
    }
  `}
`;

const ToggleBtn = ({ open, onClick }) => (
  <Toggle onClick={onClick}>
    <ToggleIcon open={open} />
  </Toggle>
);
```
