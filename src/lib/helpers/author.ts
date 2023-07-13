type RawAuthorData = {
    name: string;
    avatar_url: string;
    html_url: string;
    bio: string;
}

export async function getAuthor(id: string) {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const { name, avatar_url: pic, html_url: href, bio: tooltip } = await data.json() as RawAuthorData;

    return {
        id,
        name,
        href,
        pic,
        tooltip,
    }
}

export type Author = {
    id: string;
    name: string;
    href: string;
    pic: string;
    tooltip: string;
}