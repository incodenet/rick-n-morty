export type Character = {
    id?: number,
    created?: string,
    image?: string,
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
    url?: string,
    origin?: Origin,
    episode?: string[],
    location?: Loaction,
}

export type Loaction = {
    name?: string,
    url?: string
}

export type Origin = {
    name?: string,
    url?: string
}