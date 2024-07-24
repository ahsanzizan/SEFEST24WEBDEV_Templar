export const customStyles = {
  table: {
    style: {
      backgroundColor: '#161616',
      color: '#ffffff'
    }
  },
  headRow: {
    style: {
      backgroundColor: '#161616',
      color: '#ffffff'
    }
  },
  rows: {
    style: {
      backgroundColor: '#161616',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#333333',
        color: '#ffffff'
      }
    }
  },
  cells: {
    style: {
      color: '#ffffff'
    }
  },
  pagination: {
    style: {
      backgroundColor: '#161616',
      color: '#ffffff'
    }
  },
  paginationButton: {
    style: {
      backgroundColor: '#161616',
      color: '#ffffff',
      border: '1px solid #ffffff',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#333333',
        color: '#ffffff',
        border: '1px solid #ffffff'
      }
    },
    className: 'pagination-button'
  },
  paginationButtonDisabled: {
    style: {
      opacity: 0.5
    }
  }
};
