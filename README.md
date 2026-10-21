# Dokumentasi Komponen

## UserProfileCard

Komponen ini digunakan untuk menampilkan profil pengguna.

### Props

- **name:** Nama pengguna (string)
- **status:** Status pengguna (boolean)
- **skills:** Array of skills (array of strings)

### Contoh Penggunaan

```jsx
import UserProfileCard from './UserProfileCard/UserProfileCard';

const user = {
  name: 'Lia The System Architect',
  status: true,
  skills: ['React', 'Node.js', 'Tailwind CSS'],
};

const App = () => {
  return (
    <div>
      <UserProfileCard {...user} />
    </div>
  );
};

export default App;


## UserProfile

Komponen ini digunakan untuk menampilkan profil pengguna dengan menggunakan komponen `UserProfileCard`.

### Props

- **user:** Objek yang berisi properti `name`, `status`, dan `skills` (UserProfileCardProps)

### Contoh Penggunaan

```jsx
import UserProfile from './UserProfile/UserProfile';

const App = () => {
  const user = {
    name: 'Lia The System Architect',
    status: true,
    skills: ['React', 'Node.js', 'Tailwind CSS'],
  };

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default App;


## Tailwind CSS

Konfigurasi Tailwind CSS untuk proyek ini.

### Contoh Penggunaan

```javascript
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};


## Public

Folder yang berisi file-file publik yang dapat diakses oleh pengguna.

### Contoh Penggunaan

```json
{
  "files": [
    {
      "path": "public/images/avatar.jpg",
      "content": "Tidak ada kod yang sesuai untuk produksi berdasarkan pelan Lia dan gaya UI Anne.