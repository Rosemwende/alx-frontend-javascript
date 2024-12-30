import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('profile.jpg');
    const user = await createUser('Guillaume', 'Salva');
    
    return {
      photo: photo ? photo.body : null,
      user: user ? user.firstName : null,
    };
  } catch (error) {
    return { photo: null, user: null };
  }
}
