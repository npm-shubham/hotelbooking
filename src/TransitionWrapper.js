import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation, Outlet } from 'react-router-dom';

function TransitionWrapper() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300}
      >
        <div className="page">
          <Outlet />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default TransitionWrapper;
