import { RefObject, useEffect } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement | HTMLUListElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      event.stopPropagation();
      console.log('listener here ........');
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      console.log(ref.current);
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
