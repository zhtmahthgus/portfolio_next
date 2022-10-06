import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    {
      /*next.js는 ssr로 그냥 window를 사용할 때, 서버에서 페이지 렌더링 시 해당 object가 없어 오류가 나기 때문에 아래 코드를 추가해야한다*/
    }
    if (typeof window !== "undefined") {
      const onResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return width;
}
