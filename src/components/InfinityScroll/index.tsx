import React, { ReactNode, useEffect, useRef } from 'react';

interface InterfaceInfinityScroll {
  children: ReactNode | ReactNode[];
  loaderElement?: ReactNode;
  endOfListCallback: Function;
  hasMoreData?: boolean;
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

const defaultLoader = (
  <p style={{
      width: '100%',
      textAlign: 'center',
  }}>
    Loading...
  </p>
);

const InfinityScroll = ({
  children,
  hasMoreData = true,
  loaderElement = defaultLoader,
  endOfListCallback,
}: InterfaceInfinityScroll) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([IntersectionObserverEntry]) => {
      const { isIntersecting } = IntersectionObserverEntry;
      if (isIntersecting) {
        endOfListCallback();
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    }
  }, [loaderRef, hasMoreData]);

  return (
    <>
      { children }
      {hasMoreData && <div ref={loaderRef} style={{
        width: '100%',
        display: 'block',
      }}>
        {loaderElement}
      </div>}
    </>
  );
}

export default InfinityScroll;