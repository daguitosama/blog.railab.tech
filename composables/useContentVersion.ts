export function useContentVersion() {
    const AVAILABLE_VERSIONS = ['draft', 'published'];
    const version = useState('content-version', () => 'draft');
    return {
        version,
        AVAILABLE_VERSIONS,
        cookieKey: 'content-version',
        versionKeys: {
            draft: 'draft',
            published: 'published',
        },
    };
}
