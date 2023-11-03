const selectStyles = {
  select: customStyles => ({
    ...customStyles,
    '&:focus': { outline: 'none' },
    '&:hover': { outline: 'none' },
    border: '2px solid transparent',
    transition: 'border-color 0.2s',
    '&:focus, &:hover': {
      borderColor: '#42A652',
    },
  }),
  option: customStyles => ({
    '&:hover': { background: '#474759', color: '#F6F7FB' },
    letterSpacing: '0.02em',
    fontSize: '12px',
    lineHeight: 1.17,
    padding: '12px 18px',
  }),
  control: customStyles => ({
    ...customStyles,

    '&:focus': {},
    '&:hover': {
      outline: 'none',
      boxShadow: 'rgba(102, 204, 102, 0.5)',
    },
    border: 'none',
    borderRadius: '0',
    borderRight: '2px solid var(--grey, #474759)',
    background: 'transparent',
    height: '46px',
    width: '170px',
    fontSize: '12px',
    color: '#C7CCDC80',
    '@media only screen and (max-width: 768px)': {
      height: '44px',
      width: '280px',
    },
  }),
  valueContainer: (customStyles, state) => ({
    ...customStyles,
    paddingTop: '4px',
    paddingLeft: '20px',
  }),
  indicatorSeparator: customStyles => ({
    border: 'none',
  }),
  dropdownIndicator: customStyles => ({
    ...customStyles,
    '&:focus': { color: '#C7CCDC80' },
    '&:hover': { color: '#C7CCDC80' },
    '&:active': { color: '#C7CCDC80' },
    color: '#C7CCDC50',
  }),
  menu: customStyles => ({
    ...customStyles,
    background: '#383847',
    cursor: 'pointer',
    color: '#C7CCDC50',
    marginTop: '0px',
  }),
  singleValue: customStyles => ({
    ...customStyles,
    color: '#C7CCDC50',
  }),
  container: styles => ({
    ...styles,
    '@media only screen and (max-width: 768px)': {
      ...styles['@media only screen and (max-width: 768px)'],
      height: '44px',
      width: '280px',
      borderRadius: '30px',
    },
  }),
};

export default selectStyles;
