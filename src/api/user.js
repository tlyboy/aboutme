import request from '@/utils/request'

/**
 *
 * @param {string} username
 * @returns
 */
export async function getUser(username) {
  return await request(`/users/${username}`)
}
