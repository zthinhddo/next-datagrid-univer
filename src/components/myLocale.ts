import { LocaleType, Univer } from '@univerjs/core';
import { enUS as UniverDesignEnUS, defaultTheme } from '@univerjs/design';
import { enUS as UniverDocsUIEnUS } from '@univerjs/docs-ui';
import { enUS as UniverSheetsEnUS } from '@univerjs/sheets';
import { enUS as UniverSheetsUIEnUS } from '@univerjs/sheets-ui';
import { enUS as UniverUiEnUS } from '@univerjs/ui';

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.ZH_CN,
  locales: {
    [LocaleType.EN_US]: {
      ...UniverSheetsEnUS,
      ...UniverDocsUIEnUS,
      ...UniverSheetsUIEnUS,
      ...UniverUiEnUS,
      ...UniverDesignEnUS,
    },
  },
});