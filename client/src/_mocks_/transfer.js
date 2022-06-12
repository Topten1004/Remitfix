import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['outgoing', 'income']),
  role: sample([
    'Agent',
    'Customer',
    'Customer',
    'Agent',
    'Customer',
    'Agent',
    'Customer',
    'Agent',
    'Customer',
    'Agent'
  ])
}));

export default users;
