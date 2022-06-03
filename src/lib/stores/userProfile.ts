import type { Profile } from '$lib/graphql/types'
import { writable } from 'svelte/store'

const userProfile = writable<Profile | null>(null)

export default userProfile
