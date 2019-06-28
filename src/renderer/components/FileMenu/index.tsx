import * as React from 'react';
import { observer } from 'mobx-react';

import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import store from '~/renderer/store';
import { resizeTextarea } from '~/renderer/utils';

const onOpen = () => {
  const page = store.pages.current;
  page.location.push(page.focusedFile.name);
};

const openInNewTab = () => {
  const page = store.pages.current;

  for (const file of page.selectedFiles) {
    store.tabs.addTab(page.session.site, {
      path: `${page.location.path}/${file.name}`,
      active: true,
    });
  }
};

const onRename = () => {
  const page = store.pages.current;
  page.focusedFile.renaming = true;

  requestAnimationFrame(() => {
    const { name } = page.focusedFile;
    const input = page.fileNameInput.current;
    const endIndex = name.lastIndexOf('.');

    input.value = name;
    input.setSelectionRange(0, endIndex === -1 ? name.length : endIndex);

    resizeTextarea(input);
  });
};

export default observer(() => {
  const page = store.pages.current;
  if (page == null) return null;

  const containsFile = page.selectedFiles.find(e => e.type !== 'directory');
  const mutliple = page.selectedFiles.length > 1;

  return (
    <ContextMenu content="file">
      <ContextMenuItem disabled>Download</ContextMenuItem>
      {!containsFile && (
        <>
          {!mutliple && (
            <ContextMenuItem onClick={onOpen}>Open</ContextMenuItem>
          )}
          <ContextMenuItem onClick={openInNewTab}>
            Open in new tab
          </ContextMenuItem>
        </>
      )}
      {!mutliple && (
        <>
          {containsFile && (
            <>
              <ContextMenuItem disabled>Edit</ContextMenuItem>
              <ContextMenuItem disabled>Archive</ContextMenuItem>
            </>
          )}
          <ContextMenuItem disabled>Add to bookmarks</ContextMenuItem>
        </>
      )}
      <ContextMenuItem>Cut</ContextMenuItem>
      <ContextMenuItem>Copy</ContextMenuItem>
      <ContextMenuItem>Delete</ContextMenuItem>
      {!mutliple && (
        <ContextMenuItem onClick={onRename}>Rename</ContextMenuItem>
      )}
      <ContextMenuItem disabled>Details</ContextMenuItem>
    </ContextMenu>
  );
});