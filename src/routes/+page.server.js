import { fail } from '@sveltejs/kit'

function login () {
  // login stuff
  return fail(401, { incorrect: true })
}

export const actions = { login }
