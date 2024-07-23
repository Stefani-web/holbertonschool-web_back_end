import { signUpUser } from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    return Promise.allSettled([userPromise, photoPromise])
        .then((results) => {
            return results.map((result) => {
                if (result.status === 'fulfilled') {
                    return {
                        status: 'fulfilled',
                        value: result.value
                    };
                } else {
                    return {
                        status: 'rejected',
                        value: result.reason.toString()
                    };
                }
            });
        });
}
