/**
 * API endpoint map for the PBCTF app.
 *
 * All endpoints are relative to the Next.js app (no external backend).
 * Keep this in sync with the route handlers under `app/api/`.
 */

export const API_ENDPOINTS = {
  // ===== AUTHENTICATION =====
  register: '/pbctf/api/registration',              // POST (FormData)
  login: '/pbctf/api/user/login',                   // POST (JSON)

  // ===== USER ENDPOINTS =====
  userProfile: '/pbctf/api/user/profile',                    // GET, PUT
  lookingForTeam: '/pbctf/api/user/looking-for-team',        // GET, PUT
  userRsvp: '/pbctf/api/user/rsvp',                          // PUT
  users: '/pbctf/api/users',                                 // GET (by ID)
  userFlag: '/pbctf/api/user/flag',                          // GET, POST

  // ===== TEAM ENDPOINTS =====
  createTeam: '/pbctf/api/team/create',                      // POST
  lookingForMembers: '/pbctf/api/team/looking-for-members',  // GET, PUT
  joinTeam: '/pbctf/api/team/join',                          // PUT
  joinRequest: '/pbctf/api/team/join-request',               // POST, GET
  respondToJoinRequest: (requestId: string) => `/pbctf/api/team/join-request/${requestId}`,  // PUT
  cancelInvite: (requestId: string) => `/pbctf/api/team/join-request/${requestId}`,           // DELETE
  leaveTeam: '/pbctf/api/team/leave',                        // PUT
  removeMember: '/pbctf/api/team/remove-member',             // PUT
  deleteTeam: '/pbctf/api/team/delete',                      // DELETE
  getTeam: (teamCode: string) => `/pbctf/api/team/${teamCode}`,  // GET

  // ===== ADMIN ENDPOINTS =====
  adminParticipants: '/pbctf/api/admin/participants',        // GET
  adminTeams: '/pbctf/api/admin/teams',                      // GET
  adminTeamDetails: (teamCode: string) => `/pbctf/api/admin/teams/${teamCode}`,    // GET
  adminUpdateTeam: (teamCode: string) => `/pbctf/api/admin/teams/${teamCode}`,     // PUT
  adminEvaluators: '/pbctf/api/admin/evaluators',            // GET
  adminAssignEvaluators: '/pbctf/api/admin/evaluators/assign',  // PUT
  adminExport: '/pbctf/api/admin/export',                    // GET
  adminPromoteUser: '/pbctf/api/admin/users/promote',        // PUT

  // ===== EVALUATOR ENDPOINTS =====
  evaluatorRegister: '/pbctf/api/evaluator/register',        // POST
  evaluatorTeams: '/pbctf/api/evaluator/teams',              // GET
  evaluatorEvaluate: '/pbctf/api/evaluator/evaluate',        // POST
  evaluatorVote: '/pbctf/api/evaluator/vote',                // PUT
};
