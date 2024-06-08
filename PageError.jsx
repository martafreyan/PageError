import { Button } from '../Button/Button';
import classes from './PageError.module.css';

export const PageError = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classes.pageError}>
      <p className={classes.pageErrorMessage}>An unexpected error occurred</p>
      <Button onClick={reloadPage}>Reload page</Button>
    </div>
  );
};
