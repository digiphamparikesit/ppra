// assets/js/auth.js

// Fungsi Login
async function loginUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
}

// Fungsi Logout
async function logoutUser() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}

// Cek Sesi (Panggil di halaman yang butuh login)
async function requireAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  
  if (!session) {
    // Jika tidak ada sesi, tendang ke halaman login
    window.location.href = 'index.html';
    return null;
  }

  // Ambil data profil dari tabel profiles
  const { data: profile, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (error || !profile) {
    console.error("Gagal ambil profil", error);
    return session;
  }

  return { session, profile };
}
