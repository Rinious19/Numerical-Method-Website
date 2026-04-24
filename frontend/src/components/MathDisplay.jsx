// สร้าง MathDisplay component ใหม่ที่ควบคุม typeset เอง
import { useEffect, useRef } from 'react';

function MathDisplay({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && window.MathJax) {
      // clear cache ของ element นี้ก่อน แล้วค่อย typeset ใหม่
      window.MathJax.typesetClear([ref.current]);
      window.MathJax.typesetPromise([ref.current]).catch(console.error);
    }
  }, [children]); // re-run ทุกครั้งที่ children เปลี่ยน

  return <span ref={ref}>{children}</span>;
}

export default MathDisplay;