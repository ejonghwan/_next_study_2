import { useRef, useCallback } from 'react'

export default function useDynamicRef<T>() {

  const dynamicRefs = useRef([]);
  const keys = useRef<string[]>([]);

  const handleRef = useCallback((key: string) => {
		
		return (ref: T) => {
		  const keyIdx = keys.current.indexOf(key);
		      if (keyIdx !== -1) {
		          dynamicRef.current[keyIdx] = ref;
		          return;
		      }
		      keys.current.push(key);
		      dynamicRefs.current.push(ref);
	    };
	}, []);
  
  return { refs: dynamicRefs.current, handleRef };
}