export function useContentVersion() {
    const AVAILABLE_VERSIONS = ['draft', 'published'];
    const version = useState('content-version', () => 'draft');
    return {
        version,
        AVAILABLE_VERSIONS,
    };
}
