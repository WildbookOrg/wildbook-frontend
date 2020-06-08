import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import LabeledInput from '../../components/LabeledInput';
import orgSchema from '../../constants/orgSchema';

export default function CreateOrg({ open, onClose, onCreateUser }) {
  const initialState = orgSchema.reduce((memo, field) => {
    memo[field.name] = field.defaultValue;
    return memo;
  }, {});

  const [formState, setFormState] = useState(initialState);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <FormattedMessage id="CREATE_ORG" />
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          spacing={2}
          justify="center"
          component="form"
          style={{ maxWidth: 320, marginBottom: 12 }}
        >
          {orgSchema.map(field => (
            <Grid item>
              <LabeledInput
                schema={field}
                value={formState[field.name]}
                onChange={newFieldValue =>
                  setFormState({
                    ...formState,
                    [field.name]: newFieldValue,
                  })
                }
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          <FormattedMessage id="CANCEL" />
        </Button>
        <Button onClick={() => onCreateUser(formState)}>
          <FormattedMessage id="CREATE" />
        </Button>
      </DialogActions>
    </Dialog>
  );
}