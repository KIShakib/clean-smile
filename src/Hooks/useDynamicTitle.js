import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - Clean Smile`;
    }, [title])
};


export default useDynamicTitle;