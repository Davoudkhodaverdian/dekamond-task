export interface User {
    results:
    {
        name: { title: string, first: string, last: string }
        picture: { large: string, medium: string, small: string }
    }[]
}