import * as React from 'react';
import { navigate } from 'gatsby';

const NavButton = ({ currentIndex = 0, total = 1, list = [] }) => {
  //currentIndex is the current index of either a  or a project
  //total is the number of s or projects
  //list is the array of objects each containing information for each  or project

  function handleClickNavButton(action, e) {
    e.preventDefault();
    let prevOrNextItem = '';
    if (action === 'next') {
      prevOrNextItem = list[currentIndex - 1];
    } else {
      prevOrNextItem = list[currentIndex + 1];
    }

    navigate('../' + prevOrNextItem.slug.split('/').pop());
  }

  return (
    <nav>
      <button
        disabled={currentIndex + 1 >= total ? true : false}
        onClick={e => handleClickNavButton('prev', e)}
      >
        &lt;
      </button>
      <button
        disabled={currentIndex - 1 < 0 ? true : false}
        onClick={e => handleClickNavButton('next', e)}
      >
        &gt;
      </button>
    </nav>
  );
};

export default NavButton;
