const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("==================================================");
  console.log("RUNNING ADMIN ACCESS RESTRICTION VERIFICATION SUITE");
  console.log("==================================================\n");

  let passed = 0;
  let total = 0;

  function assert(condition, testName, details = "") {
    total++;
    if (condition) {
      console.log(`✅ [PASS] ${testName} ${details ? `(${details})` : ""}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${testName} ${details ? `(${details})` : ""}`);
    }
  }

  // ----------------------------------------------------
  // TEST 1: LOGGED OUT ACCESS (Should be 401 Unauthorized / 307 Redirect)
  // ----------------------------------------------------
  console.log("--- 1. Testing Logged Out (Unauthenticated) Access ---");

  // 1.1 GET /api/contact (Logged out)
  const resGetContact = await fetch(`${BASE_URL}/api/contact`);
  assert(resGetContact.status === 401, "GET /api/contact returns 401", `Status: ${resGetContact.status}`);

  // 1.2 PATCH /api/contact (Logged out)
  const resPatchContact = await fetch(`${BASE_URL}/api/contact`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: "fake-id", status: "resolved" }),
  });
  assert(resPatchContact.status === 401, "PATCH /api/contact returns 401", `Status: ${resPatchContact.status}`);

  // 1.3 DELETE /api/contact (Logged out)
  const resDeleteContact = await fetch(`${BASE_URL}/api/contact?id=fake-id`, { method: "DELETE" });
  assert(resDeleteContact.status === 401, "DELETE /api/contact returns 401", `Status: ${resDeleteContact.status}`);

  // 1.4 GET /api/admin/queries (Logged out)
  const resGetAdminQ = await fetch(`${BASE_URL}/api/admin/queries`);
  assert(resGetAdminQ.status === 401, "GET /api/admin/queries returns 401", `Status: ${resGetAdminQ.status}`);

  // 1.5 POST /api/admin/queries (Logged out)
  const resPostAdminQ = await fetch(`${BASE_URL}/api/admin/queries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName: "Hacker", email: "hacker@test.com", mobile: "1234567890" }),
  });
  assert(resPostAdminQ.status === 401, "POST /api/admin/queries returns 401", `Status: ${resPostAdminQ.status}`);

  // 1.6 GET /api/admin/users (Logged out)
  const resGetAdminUsers = await fetch(`${BASE_URL}/api/admin/users`);
  assert(resGetAdminUsers.status === 401, "GET /api/admin/users returns 401", `Status: ${resGetAdminUsers.status}`);

  // 1.7 Server-side redirect for /admin page (Logged out)
  const resAdminPageLoggedOut = await fetch(`${BASE_URL}/admin`, { redirect: "manual" });
  assert(
    resAdminPageLoggedOut.status === 307 || resAdminPageLoggedOut.status === 302,
    "GET /admin redirects to login on server",
    `Status: ${resAdminPageLoggedOut.status}, Location: ${resAdminPageLoggedOut.headers.get("location")}`
  );

  // ----------------------------------------------------
  // TEST 2: STANDARD USER ACCESS (Should be 403 Forbidden)
  // ----------------------------------------------------
  console.log("\n--- 2. Testing Standard User Access (role: 'user') ---");

  // 2.1 Login as user@equitymine.com
  const resUserLogin = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "user@equitymine.com", password: "UserPassword123!" }),
  });
  const userLoginData = await resUserLogin.json();
  const userCookie = resUserLogin.headers.get("set-cookie");

  assert(
    resUserLogin.status === 200 && userLoginData.user?.role === "user",
    "Standard user login succeeds",
    `Role: ${userLoginData.user?.role}`
  );

  // 2.2 GET /api/contact as standard user -> 403 Forbidden
  const resUserGetContact = await fetch(`${BASE_URL}/api/contact`, {
    headers: { Cookie: userCookie },
  });
  assert(
    resUserGetContact.status === 403,
    "GET /api/contact returns 403 for role 'user'",
    `Status: ${resUserGetContact.status}`
  );

  // 2.3 PATCH /api/contact as standard user -> 403 Forbidden
  const resUserPatchContact = await fetch(`${BASE_URL}/api/contact`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Cookie: userCookie },
    body: JSON.stringify({ id: "fake-id", status: "resolved" }),
  });
  assert(
    resUserPatchContact.status === 403,
    "PATCH /api/contact returns 403 for role 'user'",
    `Status: ${resUserPatchContact.status}`
  );

  // 2.4 DELETE /api/contact as standard user -> 403 Forbidden
  const resUserDeleteContact = await fetch(`${BASE_URL}/api/contact?id=fake-id`, {
    method: "DELETE",
    headers: { Cookie: userCookie },
  });
  assert(
    resUserDeleteContact.status === 403,
    "DELETE /api/contact returns 403 for role 'user'",
    `Status: ${resUserDeleteContact.status}`
  );

  // 2.5 GET /api/admin/queries as standard user -> 403 Forbidden
  const resUserGetAdminQ = await fetch(`${BASE_URL}/api/admin/queries`, {
    headers: { Cookie: userCookie },
  });
  assert(
    resUserGetAdminQ.status === 403,
    "GET /api/admin/queries returns 403 for role 'user'",
    `Status: ${resUserGetAdminQ.status}`
  );

  // 2.6 Server-side redirect for /admin page as standard user -> redirects with ?error=forbidden
  const resUserAdminPage = await fetch(`${BASE_URL}/admin`, {
    headers: { Cookie: userCookie },
    redirect: "manual",
  });
  assert(
    (resUserAdminPage.status === 307 || resUserAdminPage.status === 302) &&
      resUserAdminPage.headers.get("location")?.includes("forbidden"),
    "GET /admin server redirects standard user with ?error=forbidden",
    `Location: ${resUserAdminPage.headers.get("location")}`
  );

  // ----------------------------------------------------
  // TEST 3: ADMIN ACCESS (Should be 200 OK)
  // ----------------------------------------------------
  console.log("\n--- 3. Testing Admin Access (role: 'admin') ---");

  // 3.1 Login as admin@equitymine.com
  const resAdminLogin = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@equitymine.com", password: "AdminPassword123!" }),
  });
  const adminLoginData = await resAdminLogin.json();
  const adminCookie = resAdminLogin.headers.get("set-cookie");

  assert(
    resAdminLogin.status === 200 && adminLoginData.user?.role === "admin",
    "Admin login succeeds",
    `Role: ${adminLoginData.user?.role}`
  );

  // 3.2 GET /api/contact as admin -> 200 OK
  const resAdminGetContact = await fetch(`${BASE_URL}/api/contact`, {
    headers: { Cookie: adminCookie },
  });
  const adminContactData = await resAdminGetContact.json();
  assert(
    resAdminGetContact.status === 200 && adminContactData.success === true,
    "GET /api/contact returns 200 for admin",
    `Records: ${adminContactData.data?.length}`
  );

  // 3.3 GET /api/admin/queries as admin -> 200 OK
  const resAdminGetAdminQ = await fetch(`${BASE_URL}/api/admin/queries`, {
    headers: { Cookie: adminCookie },
  });
  const adminQData = await resAdminGetAdminQ.json();
  assert(
    resAdminGetAdminQ.status === 200 && adminQData.success === true,
    "GET /api/admin/queries returns 200 for admin",
    `Total: ${adminQData.stats?.total}`
  );

  // 3.4 GET /api/admin/users as admin -> 200 OK
  const resAdminGetUsers = await fetch(`${BASE_URL}/api/admin/users`, {
    headers: { Cookie: adminCookie },
  });
  const adminUsersData = await resAdminGetUsers.json();
  assert(
    resAdminGetUsers.status === 200 && adminUsersData.success === true,
    "GET /api/admin/users returns 200 for admin",
    `Users: ${adminUsersData.data?.length}`
  );

  // 3.5 GET /admin page as admin -> 200 OK
  const resAdminPage = await fetch(`${BASE_URL}/admin`, {
    headers: { Cookie: adminCookie },
    redirect: "manual",
  });
  assert(
    resAdminPage.status === 200,
    "GET /admin server renders 200 OK for admin",
    `Status: ${resAdminPage.status}`
  );

  // ----------------------------------------------------
  // TEST 4: PUBLIC CONTACT FORM (Must still work for public users)
  // ----------------------------------------------------
  console.log("\n--- 4. Testing Public Contact Form POST Submission ---");
  const resPublicPost = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Public Test Lead",
      email: "lead@test.com",
      mobile: "9876543210",
      goal: "Wealth Creation",
      message: "Testing public lead submission",
    }),
  });
  const publicPostData = await resPublicPost.json();
  assert(
    resPublicPost.status === 200 && publicPostData.success === true,
    "Public POST /api/contact works without authentication",
    `Lead ID: ${publicPostData.data?.id}`
  );

  console.log("\n==================================================");
  console.log(`TEST SUMMARY: ${passed}/${total} PASSED`);
  console.log("==================================================");
}

runTests().catch(console.error);
