import {
  useEffect,
  useRef,
  useState
} from 'react';

export const useKeyChangeFetching = (isFetching: boolean, queryKeyStr: string) => {
  const [isKeyChangeFetching, setIsKeyChangeFetching] = useState(false);
  const prevQueryKeyStr = useRef(queryKeyStr);

  useEffect(() => {
    if (prevQueryKeyStr.current !== queryKeyStr && isFetching) {
      prevQueryKeyStr.current = queryKeyStr;
      setIsKeyChangeFetching(true);
    }
  }, [queryKeyStr, isFetching]);

  useEffect(() => {
    if (!isFetching) setIsKeyChangeFetching(false);
  }, [isFetching]);

  return isKeyChangeFetching;
};