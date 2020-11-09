import React, { useCallback, useMemo } from 'react';
import { IconButton, Icons, WithTooltip, TooltipLinkList } from '@storybook/components';
import { useParameter, useGlobals } from '@storybook/api';
import { DEFAULT_THEME_SWITCHER_CONFIG } from '../shared';

import { PARAM_KEY } from '../constants';

import ColorIcon from './color-icon';

const createCustomThemeSelectorItem = (
  id,
  name,
  value,
  onChange,
  active
) => {
  const chart = '#3A414A';
  const co = '#1071E5';
  const edu = '#4F4FE0';
  const press = '#00C2A8';
  const spark = '#E81313';
  let backgroundColor = '';

  if (value === 'chart') {
    backgroundColor = chart;
  }

  if (value === 'co') {
    backgroundColor = co;
  }

  if (value === 'edu') {
    backgroundColor = edu;
  }

  if (value === 'press') {
    backgroundColor = press;
  }

  if (value === 'spark') {
    backgroundColor = spark;
  }

  return ({
    id: id || name,
    title: name,
    value,
    onClick: () => {
      onChange({ selected: value, name });
    },
    right: <ColorIcon background={backgroundColor} />,
    active
  })
};

export const getCustomThemeByName = (
  currentSelectedValue,
  themes = [],
  defaultValue
) => {
  if (themes.find((theme) => theme.value === currentSelectedValue)) {
    return currentSelectedValue;
  }

  const defaultCustomTheme = themes.find((theme) => theme.name === defaultValue);
  if (defaultCustomTheme) {
    return defaultCustomTheme.value;
  }

  return defaultValue || '';
};

const getDisplayedItems = (
  themes,
  selectedCustomTheme,
  onChange
) => {
  const customThemeSelectorItems = themes.map(({ name, value }) =>
    createCustomThemeSelectorItem(
      null,
      name,
      value,
      onChange,
      value === selectedCustomTheme
    )
  );

  return customThemeSelectorItems;
};

const CustomThemeTool = () => {
  const customThemesConfig = useParameter(
    PARAM_KEY,
    DEFAULT_THEME_SWITCHER_CONFIG
  );

  const [globals, updateGlobals] = useGlobals();

  const globalsCustomThemes = globals[PARAM_KEY] && globals[PARAM_KEY].value || '';

  const onCustomThemeChange = useCallback(
    (value) => {
      updateGlobals({ [PARAM_KEY]: { ...globals[PARAM_KEY], value } });
    },
    [customThemesConfig, globals, updateGlobals]
  );

  if (!globalsCustomThemes && customThemesConfig && customThemesConfig.defaultValue) {
    onCustomThemeChange(customThemesConfig.defaultValue);
  }

  const selectedCustomTheme = useMemo(() => {
    return getCustomThemeByName(
      globalsCustomThemes,
      customThemesConfig.values,
      customThemesConfig.defaultValue
    );
  }, [customThemesConfig, globalsCustomThemes]);

  return (
    <React.Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          return (
            <TooltipLinkList
              links={getDisplayedItems(
                customThemesConfig.values,
                selectedCustomTheme,
                ({ selected }) => {
                  if (selectedCustomTheme !== selected) {
                    onCustomThemeChange(selected);
                  }
                  onHide();
                }
              )}
            />
          );
        }}
      >
        <IconButton
          key="withCustomTheme"
          title="Change the theme of the preview"
          active={selectedCustomTheme}
        >
          <Icons icon="circlehollow" />
        </IconButton>
      </WithTooltip>
    </React.Fragment>
  )
};

export default CustomThemeTool;
