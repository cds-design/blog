import { Octokit, App } from "octokit";

const octokit = new Octokit({
    // auth: "API_KEY",
});

export async function getLatestDiscussions(count: number = 5, isForPreview: boolean = true) {
    const { repository: { discussions: { nodes } } } = await octokit.graphql(`
    query {
        repository(owner: "cds-design", name: "CDS") {
            discussions(first: ${count}) {
                nodes {
                    number
                    title
                    url
                    createdAt
                    ${isForPreview ? "bodyHTML" : ""}
                    author {
                        login
                        avatarUrl
                        url
                    }
                }
            }
        }
    }
`) as any
    return nodes as {
        number: number
        title: string
        url: string
        createdAt: string
        bodyHTML?: string
        author: {
            login: string
            avatarUrl: string
            url: string
            resourcePath: string
        }
    }[]
}

export async function getDiscussion(id: number) {
    const { repository: { discussion: { title, url, createdAt, bodyHTML, author: { login } } } } = await octokit.graphql(`
    query {
        repository(owner: "cds-design", name: "CDS") {
            discussion(number: ${id}) {
                title
                url
                createdAt
                bodyHTML
                author {
                    login
                    avatarUrl
                    url
                }
            }
        }
    }
`) as any
    return {
        title,
        url,
        createdAt,
        bodyHTML,
        author: login
    } as {
        title: string
        url: string
        createdAt: string
        bodyHTML: string
        author: string
    }
} 
