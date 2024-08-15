import { RefObject, useEffect, useCallback, useState } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>, callback: () => void) {
    const [isIntersecting, setIntersecting] = useState(false);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        setIntersecting(entries[0].isIntersecting);
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            const observer = new IntersectionObserver(handleIntersection);
            observer.observe(element);
            return () => observer.unobserve(element);
        }
    }, [handleIntersection, ref]);

    useEffect(() => {
        if (isIntersecting) callback();
    }, [isIntersecting, callback]);
}
