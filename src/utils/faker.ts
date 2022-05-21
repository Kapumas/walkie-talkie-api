import { faker } from '@faker-js/faker';
export function getUserList(usersLength = 10) {
  const users = Array.apply(null, { length: usersLength }).map(() => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    photo: {
      url: faker.image.avatar(),
    },
  }));
  return users;
}
