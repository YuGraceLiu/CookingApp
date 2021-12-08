import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({cookState, handleChange}) {
  return (
    <div>
      <Button variant="contained" disableElevation onClick={handleChange}>
        {cookState}
      </Button>
    </div>
  );
}
