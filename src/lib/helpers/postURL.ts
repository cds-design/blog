export function getPostURL(slug: string, title: string) {
    const id = title
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .replace(/\s/g, '-');

    const href = slug ? `/posts/${slug}` : '#' + id;

    return href;
}