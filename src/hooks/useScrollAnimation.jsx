import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Optionally remove the active class when element is out of view
            // entry.target.classList.remove('active');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -100px 0px', // Adjust trigger area (negative bottom margin makes elements trigger earlier)
      }
    );

    const currentRef = scrollRef.current;
    if (currentRef) {
      // Find all elements with reveal class
      const elements = currentRef.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));

      // Handle staggered animations
      const staggeredLists = currentRef.querySelectorAll('.stagger-container');
      staggeredLists.forEach((list) => {
        const items = list.querySelectorAll('.stagger-item');
        
        const staggerObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('active');
                }, index * 100); // 100ms delay between each item
              });
            }
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
          }
        );
        
        staggerObserver.observe(list);
      });
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
        
        const staggeredLists = currentRef.querySelectorAll('.stagger-container');
        staggeredLists.forEach((list) => {
          const staggerObserver = new IntersectionObserver(() => {});
          staggerObserver.unobserve(list);
        });
      }
    };
  }, []);

  return scrollRef;
}