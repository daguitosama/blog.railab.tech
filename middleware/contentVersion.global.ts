import { useContentVersion } from '../composables/useContentVersion';

export default function contentVersion(nuxtApp) {
    const { version, cookieKey, versionKeys, AVAILABLE_VERSIONS } =
        useContentVersion();
    const content_version = useCookie(cookieKey);
    // case cookie was not present
    if (!content_version.value) {
        // let's set as the default content version
        content_version.value = versionKeys.published;
    }
    // allways sync cookies
    if (AVAILABLE_VERSIONS.includes(String(content_version.value))) {
        version.value = String(content_version.value);
    } else {
        console.error(
            '(contentVersion.global) Error: Unsoported content version detected'
        );
    }

    // console.log({
    //     content_version: content_version.value,
    //     version: version.value,
    // });
}
