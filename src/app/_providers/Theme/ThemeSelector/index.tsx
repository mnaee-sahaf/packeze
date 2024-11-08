'use client'

import React from 'react'

import { Chevron } from '../../../_components/Chevron'
import { useTheme } from '..'
import { getImplicitPreference } from '../shared'
import { Theme, themeLocalStorageKey } from './types'

import classes from './index.module.scss'

// ThemeSelector component allows users to select a theme for the application
export const ThemeSelector: React.FC = () => {
  // Reference to the select element for theme selection
  const selectRef = React.useRef<HTMLSelectElement>(null)
  // Hook to access the theme context
  const { setTheme } = useTheme()
  // State to control the visibility of the theme selector
  const [show, setShow] = React.useState(false)

  // Function to handle theme changes based on user selection
  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      // If 'auto' is selected, reset the theme
      setTheme(null)
      if (selectRef.current) selectRef.current.value = 'auto' // Update the select value
    } else {
      // Set the theme to the selected value (light or dark)
      setTheme(themeToSet)
    }
  }

  // Effect to initialize the theme based on local storage or default to light
  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    if (selectRef.current) {
      // Set the default theme to 'light' if no preference is found
      const initialTheme = preference ?? 'light';
      selectRef.current.value = initialTheme; // Set the select element's value
      setShow(true); // Show the theme selector
      setTheme(initialTheme); // Set the theme to the initial value
    }
  }, [])

  return (
    <div className={[classes.selectContainer, !show && classes.hidden].filter(Boolean).join(' ')}>
      <label htmlFor="theme">
        <select
          id="theme"
          onChange={e => onThemeChange(e.target.value as Theme & 'auto')}
          ref={selectRef}
          className={classes.select}
        >
          <option value="auto">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <div className={classes.selectIcon}>
          <Chevron className={classes.iconUp} />
          <Chevron className={classes.iconDown} />
        </div>
      </label>
    </div>
  )
}
