import { File } from '../models';

export const sortFiles = (files: File[]): File[] => {
  if (files == null) return [];

  return files.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (a.type === 'directory' && b.type === 'directory'
      || a.type !== 'directory' && b.type !== 'directory') {
      return nameA.localeCompare(nameB);
    }

    if (b.type === 'directory') {
      return 0;
    }

    if (a.type === 'directory') {
      return -1;
    }

    return 0;
  });
}