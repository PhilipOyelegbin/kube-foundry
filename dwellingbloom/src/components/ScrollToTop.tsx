import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='position-fixed bottom-0 end-0'>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className='btn btn-lg btn-primary btn-lg-square rounded-circle'>
          <i className='bi bi-arrow-up'></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
