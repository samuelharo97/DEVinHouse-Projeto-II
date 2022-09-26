import { useState } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadsFor2seconds = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const loadsFor3seconds = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const loadsFor1point5 = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  const loadsFor1second = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const loadsForRandom = () => {
    setIsLoading(true);
    const random = Math.floor(Math.random() * (20000 - 5000 + 1) + 5000);
    setTimeout(() => {
      setIsLoading(false);
    }, random);
  };

  return {
    isLoading,
    loadsFor2seconds,
    loadsFor3seconds,
    loadsFor1point5,
    loadsFor1second,
    loadsForRandom
  };
};
