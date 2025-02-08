import { API_VERSIONS, MODULE_PATHS } from './api.constants';

export const ROUTES = {
  users: {
    path: MODULE_PATHS.users, // ✅ Base path: /api/users
    versions: {
      v1: API_VERSIONS.v1, // ✅ Version 1
      v2: API_VERSIONS.v2, // ✅ Version 2
    },
  },
  auth: {
    path: MODULE_PATHS.auth, // ✅ Base path: /api/auth
    versions: {
      v1: API_VERSIONS.v1,
      v2: API_VERSIONS.v2,
    },
  },
};
