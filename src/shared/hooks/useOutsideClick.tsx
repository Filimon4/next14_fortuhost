import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type UseOutsideClickHook = (onOutsideClick: () => void) => RefObject<HTMLElement>;

const useOutsideClick: UseOutsideClickHook = (onOutsideClick) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        };

        document.addEventListener('mouseup', handleClick);

        return () => {
            document.removeEventListener('mouseup', handleClick);
        };
    }, [onOutsideClick]);

    return ref;
};

export default useOutsideClick;
