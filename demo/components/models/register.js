import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  Divider
} from '@material-ui/core';

export default props => {
  const classes = makeStyles(theme => ({
    inputer: {
      width: 400
    }
  }))();

  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');

  const [isOpen, setOpen] = React.useState(true);
  const close = () => {
    setOpen(false);
    setTimeout(props.$destory, 500);
  }

  return [
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>注册</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs />
          <Grid item xs={12}>
            <TextField
              className={classes.inputer}
              autoFocus
              margin='dense'
              label='用户名'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container>
          <Grid item xs />
          <Grid item xs={12}>
            <TextField
              className={classes.inputer}
              margin='dense'
              label='密码'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container>
          <Grid item xs />
          <Grid item xs={12}>
            <TextField
              className={classes.inputer}
              margin='dense'
              label='重复密码'
              type='password'
              value={rePassword}
              onChange={e => setRePassword(e.target.value)}
            />
          </Grid>
          <Grid item xs />
        </Grid>
        <Divider />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={close}
          color='primary'
        >
          取消
        </Button>
        <Button
          disabled={!(name && password && password === rePassword)}
          onClick={() => props.submit({ name, password })}
          color='primary'
        >
          注册
        </Button>
      </DialogActions>
    </Dialog>
  ];
}