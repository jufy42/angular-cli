import { prerelease } from 'semver';
import { packages } from '../../../../lib/packages';
import { npm } from '../utils/process';

export default async function() {
  const publishArgs = [
    'run',
    'admin',
    '--',
    'publish',
    '--no-versionCheck',
    '--no-branchCheck',
    '--registry=http://localhost:4873',
  ];

  const pre = prerelease(packages['@angular/cli'].version);
  if (pre && pre.length > 0) {
    publishArgs.push('--tag', 'next');
  } else {
    publishArgs.push('--tag', 'latest');
  }

  await npm(...publishArgs);
}
