export function useComContent() {
    // when using a plain `ref` cause hydration errors
    // but when using a useState hook works fine
    const content = useState('content', () => ({
        comp1: {
            name: 'component 1',
        },
        comp2: {
            name: 'component 2',
        },
        comp3: {
            name: 'component 3',
        },
    }));

    async function loadContent() {
        await new Promise((resolve) => {
            setTimeout(() => {
                content.value.comp1.name = '$comp 1';
                content.value.comp2.name = '$comp 2';
                content.value.comp3.name = '$comp 3 ';
                resolve('');
            }, 2e3);
        });
    }

    return {
        content,
        loadContent,
    };
}
